import { useState } from 'react'
import { Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SearchBar = ({ onSearch, searchTerm }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm || '')

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(localSearchTerm)
  }

  const handleClear = () => {
    setLocalSearchTerm('')
    onSearch('')
  }

  const handleInputChange = (e) => {
    const value = e.target.value
    setLocalSearchTerm(value)
    // 实时搜索
    onSearch(value)
  }

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="搜索文件..."
            value={localSearchTerm}
            onChange={handleInputChange}
            className="
              w-full pl-10 pr-10 py-3 
              border border-gray-300 dark:border-gray-600 
              rounded-lg 
              bg-white dark:bg-gray-800 
              text-gray-900 dark:text-gray-100
              placeholder-gray-500 dark:placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              transition-all duration-200
            "
          />
          {localSearchTerm && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleClear}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </form>
      
      {searchTerm && (
        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          搜索结果: "{searchTerm}"
        </div>
      )}
    </div>
  )
}

export default SearchBar

