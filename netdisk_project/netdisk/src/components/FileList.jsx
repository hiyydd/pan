import { useState } from 'react'
import { Download, Trash2, File, Image, FileText, Music, Video } from 'lucide-react'
import { Button } from '@/components/ui/button'

const FileList = ({ files, onFileDelete, onFileDownload }) => {
  const [deletingFile, setDeletingFile] = useState(null)

  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop()?.toLowerCase()
    
    if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(extension)) {
      return <Image className="h-5 w-5 text-blue-500" />
    } else if (['pdf', 'doc', 'docx', 'txt', 'md'].includes(extension)) {
      return <FileText className="h-5 w-5 text-red-500" />
    } else if (['mp3', 'wav', 'flac', 'aac'].includes(extension)) {
      return <Music className="h-5 w-5 text-green-500" />
    } else if (['mp4', 'avi', 'mkv', 'mov'].includes(extension)) {
      return <Video className="h-5 w-5 text-purple-500" />
    } else {
      return <File className="h-5 w-5 text-gray-500" />
    }
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const handleDelete = async (fileId, fileName) => {
    setDeletingFile(fileId)
    try {
      await onFileDelete(fileId)
    } catch (error) {
      console.error('删除失败:', error)
    } finally {
      setDeletingFile(null)
    }
  }

  const handleDownload = async (fileId, fileName) => {
    try {
      await onFileDownload(fileId, fileName)
    } catch (error) {
      console.error('下载失败:', error)
    }
  }

  if (files.length === 0) {
    return (
      <div className="text-center py-12">
        <File className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
          暂无文件
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          上传一些文件开始使用网盘吧
        </p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
            文件列表 ({files.length} 个文件)
          </h3>
        </div>
        
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {files.map((file) => (
            <div
              key={file.id}
              className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  {getFileIcon(file.name)}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                      {file.name}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <span>{formatFileSize(file.size)}</span>
                      <span>{formatDate(file.uploadTime)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDownload(file.id, file.name)}
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(file.id, file.name)}
                    disabled={deletingFile === file.id}
                    className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FileList

