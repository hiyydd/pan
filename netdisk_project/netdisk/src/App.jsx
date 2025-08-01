import { useState, useEffect } from 'react'
import { Cloud, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import FileUpload from './components/FileUpload'
import FileList from './components/FileList'
import SearchBar from './components/SearchBar'
import './App.css'

const API_BASE_URL = "." // 使用相对路径pi'

function App() {
  const [files, setFiles] = useState([])
  const [filteredFiles, setFilteredFiles] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [loading, setLoading] = useState(true)

  // 获取文件列表
  const fetchFiles = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/files`)
      const data = await response.json()
      
      if (data.success) {
        setFiles(data.files)
        setFilteredFiles(data.files)
      } else {
        console.error('获取文件列表失败:', data.error)
      }
    } catch (error) {
      console.error('获取文件列表失败:', error)
    } finally {
      setLoading(false)
    }
  }

  // 初始化加载文件列表
  useEffect(() => {
    fetchFiles()
  }, [])

  // 搜索功能
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredFiles(files)
    } else {
      const filtered = files.filter(file =>
        file.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredFiles(filtered)
    }
  }, [files, searchTerm])

  // 切换主题
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const handleFileUpload = async (file) => {
    try {
      const formData = new FormData()
      formData.append('file', file)
      
      const response = await fetch(`${API_BASE_URL}/files/upload`, {
        method: 'POST',
        body: formData
      })
      
      const data = await response.json()
      
      if (data.success) {
        // 重新获取文件列表
        await fetchFiles()
      } else {
        throw new Error(data.error || '上传失败')
      }
    } catch (error) {
      console.error('上传文件失败:', error)
      alert(`上传失败: ${error.message}`)
      throw error
    }
  }

  const handleFileDelete = async (fileId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/files/${fileId}`, {
        method: 'DELETE'
      })
      
      const data = await response.json()
      
      if (data.success) {
        // 重新获取文件列表
        await fetchFiles()
      } else {
        throw new Error(data.error || '删除失败')
      }
    } catch (error) {
      console.error('删除文件失败:', error)
      alert(`删除失败: ${error.message}`)
      throw error
    }
  }

  const handleFileDownload = async (fileId, fileName) => {
    try {
      const response = await fetch(`${API_BASE_URL}/files/${fileId}/download`)
      
      if (response.ok) {
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = fileName
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
      } else {
        throw new Error('下载失败')
      }
    } catch (error) {
      console.error('下载文件失败:', error)
      alert(`下载失败: ${error.message}`)
      throw error
    }
  }

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Cloud className="h-12 w-12 text-blue-500 mx-auto mb-4 animate-pulse" />
          <p className="text-gray-600 dark:text-gray-400">加载中...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* 头部 */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Cloud className="h-8 w-8 text-blue-500" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                简易网盘
              </h1>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* 欢迎信息 */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              欢迎使用简易网盘
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              安全、简单、免费的文件存储服务。支持多种文件格式，随时随地访问您的文件。
            </p>
          </div>

          {/* 文件上传 */}
          <FileUpload onFileUpload={handleFileUpload} />

          {/* 搜索栏 */}
          <SearchBar onSearch={handleSearch} searchTerm={searchTerm} />

          {/* 文件列表 */}
          <FileList
            files={filteredFiles}
            onFileDelete={handleFileDelete}
            onFileDownload={handleFileDownload}
          />
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <p>&copy; 2025 简易网盘. 免费文件存储服务.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
