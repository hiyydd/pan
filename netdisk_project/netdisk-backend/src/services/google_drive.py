import os
import json
import tempfile
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload, MediaIoBaseDownload
import io

# Google Drive API 权限范围
SCOPES = ['https://www.googleapis.com/auth/drive.file']

class GoogleDriveService:
    def __init__(self):
        self.service = None
        self.credentials = None
        
    def authenticate(self):
        """认证Google Drive API"""
        creds = None
        
        # 检查是否有保存的凭据
        if os.path.exists('token.json'):
            creds = Credentials.from_authorized_user_file('token.json', SCOPES)
        
        # 如果没有有效凭据，进行OAuth流程
        if not creds or not creds.valid:
            if creds and creds.expired and creds.refresh_token:
                creds.refresh(Request())
            else:
                # 这里需要Google API凭据文件
                # 由于这是演示，我们将使用模拟的方式
                return False
        
        # 保存凭据以供下次使用
        with open('token.json', 'w') as token:
            token.write(creds.to_json())
        
        self.credentials = creds
        self.service = build('drive', 'v3', credentials=creds)
        return True
    
    def upload_file(self, file_path, file_name, mime_type=None):
        """上传文件到Google Drive"""
        if not self.service:
            if not self.authenticate():
                raise Exception("Google Drive认证失败")
        
        try:
            file_metadata = {'name': file_name}
            
            if mime_type:
                media = MediaFileUpload(file_path, mimetype=mime_type)
            else:
                media = MediaFileUpload(file_path)
            
            file = self.service.files().create(
                body=file_metadata,
                media_body=media,
                fields='id'
            ).execute()
            
            return file.get('id')
        except Exception as e:
            raise Exception(f"文件上传失败: {str(e)}")
    
    def download_file(self, file_id, file_name):
        """从Google Drive下载文件"""
        if not self.service:
            if not self.authenticate():
                raise Exception("Google Drive认证失败")
        
        try:
            request = self.service.files().get_media(fileId=file_id)
            file_io = io.BytesIO()
            downloader = MediaIoBaseDownload(file_io, request)
            
            done = False
            while done is False:
                status, done = downloader.next_chunk()
            
            file_io.seek(0)
            return file_io
        except Exception as e:
            raise Exception(f"文件下载失败: {str(e)}")
    
    def delete_file(self, file_id):
        """从Google Drive删除文件"""
        if not self.service:
            if not self.authenticate():
                raise Exception("Google Drive认证失败")
        
        try:
            self.service.files().delete(fileId=file_id).execute()
            return True
        except Exception as e:
            raise Exception(f"文件删除失败: {str(e)}")
    
    def get_file_info(self, file_id):
        """获取文件信息"""
        if not self.service:
            if not self.authenticate():
                raise Exception("Google Drive认证失败")
        
        try:
            file = self.service.files().get(
                fileId=file_id,
                fields='id,name,size,mimeType,createdTime'
            ).execute()
            return file
        except Exception as e:
            raise Exception(f"获取文件信息失败: {str(e)}")

# 模拟Google Drive服务（用于演示）
class MockGoogleDriveService:
    def __init__(self):
        self.files = {}
        self.next_id = 1
    
    def authenticate(self):
        return True
    
    def upload_file(self, file_path, file_name, mime_type=None):
        """模拟上传文件"""
        file_id = f"mock_file_{self.next_id}"
        self.next_id += 1
        
        # 读取文件内容并保存到内存（仅用于演示）
        with open(file_path, 'rb') as f:
            content = f.read()
        
        self.files[file_id] = {
            'name': file_name,
            'content': content,
            'mime_type': mime_type,
            'size': len(content)
        }
        
        return file_id
    
    def download_file(self, file_id, file_name):
        """模拟下载文件"""
        if file_id not in self.files:
            raise Exception("文件不存在")
        
        content = self.files[file_id]['content']
        return io.BytesIO(content)
    
    def delete_file(self, file_id):
        """模拟删除文件"""
        if file_id in self.files:
            del self.files[file_id]
            return True
        return False
    
    def get_file_info(self, file_id):
        """模拟获取文件信息"""
        if file_id not in self.files:
            raise Exception("文件不存在")
        
        file_data = self.files[file_id]
        return {
            'id': file_id,
            'name': file_data['name'],
            'size': str(file_data['size']),
            'mimeType': file_data['mime_type'],
            'createdTime': '2025-01-16T00:00:00.000Z'
        }

# 创建全局服务实例
# 在实际部署时，应该使用真正的GoogleDriveService
drive_service = MockGoogleDriveService()

