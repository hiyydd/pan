import os
import tempfile
import uuid
from flask import Blueprint, request, jsonify, send_file
from werkzeug.utils import secure_filename
from src.models.file import db, File
from src.services.google_drive import drive_service
import logging

# 配置日志
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")

files_bp = Blueprint("files", __name__)

# 允许的文件类型
ALLOWED_EXTENSIONS = {
    "txt", "pdf", "png", "jpg", "jpeg", "gif", "doc", "docx",
    "xls", "xlsx", "ppt", "pptx", "zip", "rar", "mp3", "mp4", "avi", "mov"
}

def allowed_file(filename):
    return "." in filename and \
           filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS

@files_bp.route("/files", methods=["GET"])
def get_files():
    """获取文件列表"""
    try:
        files = File.query.order_by(File.upload_time.desc()).all()
        logging.info("成功获取文件列表")
        return jsonify({
            "success": True,
            "files": [file.to_dict() for file in files]
        })
    except Exception as e:
        logging.error(f"获取文件列表失败: {e}")
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500

@files_bp.route("/files/upload", methods=["POST"])
def upload_file():
    """上传文件"""
    try:
        if "file" not in request.files:
            logging.warning("上传请求中没有文件部分")
            return jsonify({
                "success": False,
                "error": "没有选择文件"
            }), 400
        
        file = request.files["file"]
        
        if file.filename == "":
            logging.warning("上传文件名为控")
            return jsonify({
                "success": False,
                "error": "没有选择文件"
            }), 400
        
        if not allowed_file(file.filename):
            logging.warning(f"不支持的文件类型: {file.filename}")
            return jsonify({
                "success": False,
                "error": "不支持的文件类型"
            }), 400
        
        # 安全的文件名处理
        filename = secure_filename(file.filename)
        logging.info(f"正在处理文件上传: {filename}")
        
        # 创建临时文件
        with tempfile.NamedTemporaryFile(delete=False) as temp_file:
            file.save(temp_file.name)
            temp_file_path = temp_file.name
        logging.info(f"文件已保存到临时路径: {temp_file_path}")
        
        try:
            # 上传到Google Drive
            google_drive_id = drive_service.upload_file(
                temp_file_path,
                filename,
                file.content_type
            )
            logging.info(f"文件已上传到Google Drive，ID: {google_drive_id}")
            
            # 保存文件信息到数据库
            file_record = File(
                id=str(uuid.uuid4()),
                name=filename,
                size=os.path.getsize(temp_file_path),
                mime_type=file.content_type,
                google_drive_id=google_drive_id
            )
            
            db.session.add(file_record)
            db.session.commit()
            logging.info(f"文件信息已保存到数据库: {filename}")
            
            return jsonify({
                "success": True,
                "file": file_record.to_dict()
            })
            
        finally:
            # 清理临时文件
            os.unlink(temp_file_path)
            logging.info(f"临时文件已清理: {temp_file_path}")
            
    except Exception as e:
        logging.error(f"文件上传失败: {e}", exc_info=True)
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500

@files_bp.route("/files/<file_id>/download", methods=["GET"])
def download_file(file_id):
    """下载文件"""
    try:
        file_record = File.query.get(file_id)
        if not file_record:
            logging.warning(f"下载文件失败: 文件ID {file_id} 不存在")
            return jsonify({
                "success": False,
                "error": "文件不存在"
            }), 404
        
        logging.info(f"正在下载文件: {file_record.name} (ID: {file_id})")
        # 从Google Drive下载文件
        file_io = drive_service.download_file(
            file_record.google_drive_id,
            file_record.name
        )
        logging.info(f"文件 {file_record.name} 已从Google Drive下载")
        
        return send_file(
            file_io,
            as_attachment=True,
            download_name=file_record.name,
            mimetype=file_record.mime_type
        )
        
    except Exception as e:
        logging.error(f"文件下载失败: {e}", exc_info=True)
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500

@files_bp.route("/files/<file_id>", methods=["DELETE"])
def delete_file(file_id):
    """删除文件"""
    try:
        file_record = File.query.get(file_id)
        if not file_record:
            logging.warning(f"删除文件失败: 文件ID {file_id} 不存在")
            return jsonify({
                "success": False,
                "error": "文件不存在"
            }), 404
        
        logging.info(f"正在删除文件: {file_record.name} (ID: {file_id})")
        # 从Google Drive删除文件
        drive_service.delete_file(file_record.google_drive_id)
        logging.info(f"文件 {file_record.name} 已从Google Drive删除")
        
        # 从数据库删除记录
        db.session.delete(file_record)
        db.session.commit()
        logging.info(f"文件信息已从数据库删除: {file_record.name}")
        
        return jsonify({
            "success": True,
            "message": "文件删除成功"
        })
        
    except Exception as e:
        logging.error(f"文件删除失败: {e}", exc_info=True)
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500

@files_bp.route("/files/search", methods=["GET"])
def search_files():
    """搜索文件"""
    try:
        query = request.args.get("q", "").strip()
        logging.info(f"正在搜索文件，查询: {query}")
        
        if not query:
            return get_files()
        
        files = File.query.filter(
            File.name.contains(query)
        ).order_by(File.upload_time.desc()).all()
        
        logging.info(f"搜索到 {len(files)} 个文件")
        return jsonify({
            "success": True,
            "files": [file.to_dict() for file in files],
            "query": query
        })
        
    except Exception as e:
        logging.error(f"文件搜索失败: {e}", exc_info=True)
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500

