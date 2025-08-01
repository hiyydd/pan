# 简易网盘 (Simple Netdisk)

⭐ 如果这个项目对您有帮助，请点亮右上角的 **Star** 支持我们！您的鼓励是我们持续开发的动力！


## 许可证 (License)
本项目采用 **MIT 许可证** 开源，允许自由使用、复制、修改、分发及用于商业用途，仅需在衍生作品中保留原作者的版权声明（具体条款请参考仓库内 LICENSE 文件）。


## 简介 (Introduction)
这是一个基于 React 和 Flask 构建的简易网盘应用，旨在提供一个安全、简单、免费的文件存储服务。它支持多种文件格式的上传、下载、删除和搜索功能，并具备响应式设计，兼容桌面和移动设备。

This is a simple netdisk application built with React and Flask, aiming to provide a secure, simple, and free file storage service. It supports uploading, downloading, deleting, and searching various file formats, and features a responsive design compatible with both desktop and mobile devices.


## 功能特性 (Features)
- ✨ 文件上传 (File Upload)：支持拖拽和点击上传多种文件格式
- 📁 文件列表 (File Listing)：显示已上传的文件，包含文件名、大小、上传时间
- ⬇️ 文件下载 (File Download)：支持下载已上传的文件
- 🗑️ 文件删除 (File Deletion)：支持删除不需要的文件
- 🔍 文件搜索 (File Search)：实时搜索文件名
- 🌓 主题切换 (Theme Toggle)：支持明暗主题切换
- 📱 响应式设计 (Responsive Design)：兼容桌面和移动设备


## 系统要求 (System Requirements)

### 必需软件 (Required Software)
| 软件 (Software) | 最低版本 (Minimum Version) | 推荐版本 (Recommended Version) | 下载链接 (Download Link)       |
|-----------------|----------------------------|--------------------------------|--------------------------------|
| Node.js         | 16.0.0                     | 18.0.0+                        | [nodejs.org](https://nodejs.org) |
| Python          | 3.8.0                      | 3.11.0+                        | [python.org](https://python.org) |
| npm             | 8.0.0                      | 9.0.0+                        | 随 Node.js 安装 (Included with Node.js) |
| Git             | 2.20.0                     | 最新版 (Latest)                | [git-scm.com](https://git-scm.com) |

### 支持的操作系统 (Supported Operating Systems)
- ✅ Windows 10/11 (x64)
- ✅ macOS 10.15+ (Intel/Apple Silicon)
- ✅ Linux (Ubuntu 18.04+, CentOS 7+, Debian 10+)

### 浏览器支持 (Browser Support)
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+


## 技术栈 (Technology Stack)

### 前端 (Frontend)
- React 18 - 现代化的前端框架 (Modern frontend framework)
- Vite - 快速的构建工具 (Fast build tool)
- Tailwind CSS - 实用优先的CSS框架 (Utility-first CSS framework)
- Lucide React - 现代化的图标库 (Modern icon library)
- shadcn/ui - 高质量的UI组件库 (High-quality UI component library)

### 后端 (Backend)
- Flask - 轻量级的Python Web框架 (Lightweight Python web framework)
- SQLAlchemy - Python SQL工具包和ORM (Python SQL toolkit and ORM)
- Flask-CORS - 跨域资源共享支持 (Cross-origin resource sharing support)
- SQLite - 轻量级数据库 (Lightweight database)


## 项目结构 (Project Structure)
```
netdisk-project/
├── netdisk/                    # 前端项目 (Frontend project)
│   ├── public/                 # 静态资源 (Static assets)
│   │   └── favicon.ico
│   ├── src/                    # 源代码 (Source code)
│   │   ├── components/         # React组件 (React components)
│   │   │   ├── FileList.jsx
│   │   │   ├── FileUpload.jsx
│   │   │   └── SearchBar.jsx
│   │   ├── assets/             # 静态资源 (Static assets)
│   │   ├── App.jsx             # 主应用组件 (Main app component)
│   │   ├── main.jsx            # 入口文件 (Entry file)
│   │   └── index.css           # 全局样式 (Global styles)
│   ├── index.html              # HTML模板 (HTML template)
│   ├── package.json            # npm包配置 (npm package config)
│   ├── vite.config.js          # Vite配置 (Vite configuration)
│   └── tailwind.config.js      # Tailwind配置 (Tailwind config)
├── netdisk-backend/            # 后端项目 (Backend project)
│   ├── src/                    # 源代码 (Source code)
│   │   ├── models/             # 数据模型 (Data models)
│   │   │   ├── user.py         # 用户模型 (User model)
│   │   │   └── file.py         # 文件模型 (File model)
│   │   ├── routes/             # API路由 (API routes)
│   │   │   ├── user.py         # 用户API (User APIs)
│   │   │   └── files.py        # 文件API (File APIs)
│   │   ├── services/           # 业务服务 (Business services)
│   │   │   └── google_drive.py # Google Drive服务 (Google Drive service)
│   │   ├── static/             # 静态文件 (Static files)
│   │   └── main.py             # Flask应用入口 (Flask app entry)
│   ├── requirements.txt        # Python依赖 (Python dependencies)
│   └── venv/                   # Python虚拟环境 (Python virtual environment)
└── README.md                   # 项目说明 (Project documentation)
```


## 详细安装教程 (Detailed Installation Guide)

### 步骤 1: 环境准备 (Step 1: Environment Setup)

#### Windows 用户 (Windows Users)
- 安装 Python (Install Python)
  ```bash
  # 访问 https://python.org/downloads/ 下载最新版本
  # Visit https://python.org/downloads/ to download the latest version
  # 安装时勾选 "Add Python to PATH"
  # Check "Add Python to PATH" during installation
  ```
- 安装 Node.js (Install Node.js)
  ```bash
  # 访问 https://nodejs.org/ 下载 LTS 版本
  # Visit https://nodejs.org/ to download LTS version
  ```
- 验证安装 (Verify Installation)
  ```cmd
  python --version
  node --version
  npm --version
  ```

#### macOS 用户 (macOS Users)
- 使用 Homebrew 安装 (Install using Homebrew)
  ```bash
  # 安装 Homebrew (Install Homebrew)
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

  # 安装 Python 和 Node.js (Install Python and Node.js)
  brew install python node
  ```
- 验证安装 (Verify Installation)
  ```bash
  python3 --version
  node --version
  npm --version
  ```

#### Linux 用户 (Linux Users)
- Ubuntu/Debian 用户 (Ubuntu/Debian Users)
  ```bash
  # 更新包列表 (Update package list)
  sudo apt update

  # 安装 Python 和 Node.js (Install Python and Node.js)
  sudo apt install python3 python3-pip python3-venv nodejs npm
  ```
- CentOS/RHEL 用户 (CentOS/RHEL Users)
  ```bash
  # 安装 Python (Install Python)
  sudo yum install python3 python3-pip

  # 安装 Node.js (Install Node.js)
  curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
  sudo yum install nodejs
  ```


### 步骤 2: 获取项目代码 (Step 2: Get Project Code)

#### 方法 1: Git 克隆 (Method 1: Git Clone)
```bash
# 克隆仓库 (Clone repository)
git clone https://github.com/username/netdisk.git
cd netdisk
```

#### 方法 2: 下载压缩包 (Method 2: Download ZIP)
```bash
# 下载并解压项目文件 (Download and extract project files)
# 从 GitHub 下载 ZIP 文件并解压到本地目录
# Download ZIP file from GitHub and extract to local directory
```


### 步骤 3: 后端设置 (Step 3: Backend Setup)
- 进入后端目录 (Navigate to backend directory)
  ```bash
  cd netdisk-backend
  ```
- 创建虚拟环境 (Create virtual environment)
  - Windows:
    ```cmd
    python -m venv venv
    venv\Scripts\activate
    ```
  - macOS/Linux:
    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```
- 安装依赖 (Install dependencies)
  ```bash
  pip install -r requirements.txt
  ```
- 初始化数据库 (Initialize database)
  ```bash
  # 数据库会在首次运行时自动创建
  # Database will be automatically created on first run
  ```
- 启动后端服务 (Start backend service)
  ```bash
  python src/main.py
  ```
  成功启动后会看到 (You should see after successful startup):
  ```
  * Running on http://127.0.0.1:5000
  * Debug mode: on
  ```


### 步骤 4: 前端设置 (Step 4: Frontend Setup)
- 打开新终端并进入前端目录 (Open new terminal and navigate to frontend directory)
  ```bash
  cd netdisk
  ```
- 安装依赖 (Install dependencies)
  ```bash
  npm install
  ```
  如果遇到网络问题，可以使用淘宝镜像 (If you encounter network issues, use Taobao mirror):
  ```bash
  npm install --registry https://registry.npmmirror.com
  ```
- 启动开发服务器 (Start development server)
  ```bash
  npm run dev
  ```
  成功启动后会看到 (You should see after successful startup):
  ```
  Local:   http://localhost:5173/
  Network: http://192.168.x.x:5173/
  ```


### 步骤 5: 验证安装 (Step 5: Verify Installation)
- 访问应用 (Access the application)  
  在浏览器中打开: http://localhost:5173  
  Open in browser: http://localhost:5173
- 测试功能 (Test features)
  - ✅ 页面正常加载 (Page loads correctly)
  - ✅ 可以切换主题 (Theme toggle works)
  - ✅ 可以选择文件 (File selection works)
  - ✅ 文件列表显示正常 (File list displays correctly)


## 常见问题解决 (Troubleshooting)

### 问题 1: 端口被占用 (Problem 1: Port Already in Use)
- 错误信息 (Error Message):  
  `Error: listen EADDRINUSE: address already in use :::5000`
- 解决方案 (Solution):
  ```bash
  # Windows
  netstat -ano | findstr :5000
  taskkill /PID <PID> /F

  # macOS/Linux
  lsof -ti:5000 | xargs kill -9
  ```

### 问题 2: Python 模块未找到 (Problem 2: Python Module Not Found)
- 错误信息 (Error Message):  
  `ModuleNotFoundError: No module named 'flask'`
- 解决方案 (Solution):
  ```bash
  # 确保虚拟环境已激活 (Ensure virtual environment is activated)
  # Windows
  venv\Scripts\activate

  # macOS/Linux
  source venv/bin/activate

  # 重新安装依赖 (Reinstall dependencies)
  pip install -r requirements.txt
  ```

### 问题 3: npm 安装失败 (Problem 3: npm Install Failed)
- 错误信息 (Error Message):  
  `npm ERR! network timeout`
- 解决方案 (Solution):
  ```bash
  # 清除 npm 缓存 (Clear npm cache)
  npm cache clean --force

  # 使用淘宝镜像 (Use Taobao mirror)
  npm install --registry https://registry.npmmirror.com

  # 或者使用 yarn (Or use yarn)
  npm install -g yarn
  yarn install
  ```

### 问题 4: 文件上传失败 (Problem 4: File Upload Failed)
- 可能原因 (Possible Causes):  
  后端服务未启动 (Backend service not running)、跨域问题 (CORS issues)、文件大小超限 (File size exceeded)
- 解决方案 (Solution):  
  确保后端服务正在运行 (Ensure backend service is running)、检查浏览器控制台错误 (Check browser console for errors)、查看后端日志 (Check backend logs)


## API 文档 (API Documentation)

### 文件管理 API (File Management API)
| 方法 (Method) | 端点 (Endpoint)              | 描述 (Description)          | 参数 (Parameters)               |
|---------------|------------------------------|------------------------------|----------------------------------|
| GET           | /api/files                   | 获取文件列表 (Get file list) | -                                |
| POST          | /api/files/upload            | 上传文件 (Upload file)       | file: 文件对象 (File object)     |
| GET           | /api/files/{id}/download     | 下载文件 (Download file)     | id: 文件ID (File ID)             |
| DELETE        | /api/files/{id}              | 删除文件 (Delete file)       | id: 文件ID (File ID)             |
| GET           | /api/files/search            | 搜索文件 (Search files)      | q: 搜索关键词 (Search query)     |

### 响应格式 (Response Format)
- 成功响应 (Success Response):
  ```json
  {
    "success": true,
    "data": {...},
    "message": "操作成功"
  }
  ```
- 错误响应 (Error Response):
  ```json
  {
    "success": false,
    "error": "错误信息",
    "code": 400
  }
  ```


## 部署指南 (Deployment Guide)

### 生产环境部署 (Production Deployment)
- 构建前端 (Build frontend)
  ```bash
  cd netdisk
  npm run build
  ```
- 配置后端 (Configure backend)
  ```bash
  # 将构建文件复制到后端静态目录
  # Copy build files to backend static directory
  cp -r dist/* ../netdisk-backend/src/static/
  ```
- 使用 Gunicorn 部署 (Deploy with Gunicorn)
  ```bash
  pip install gunicorn
  gunicorn -w 4 -b 0.0.0.0:5000 src.main:app
  ```

### Docker 部署 (Docker Deployment)
```dockerfile
# Dockerfile 示例 (Dockerfile example)
FROM python:3.11-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .
EXPOSE 5000

CMD ["python", "src/main.py"]
```


## 贡献指南 (Contributing Guide)
我们欢迎所有形式的贡献！(We welcome all forms of contributions!)

### 如何贡献 (How to Contribute)
1. Fork 项目 (Fork the project)
2. 创建功能分支 (Create feature branch)
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. 提交更改 (Commit changes)
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. 推送分支 (Push branch)
   ```bash
   git push origin feature/amazing-feature
   ```
5. 创建 Pull Request (Create Pull Request)

### 代码规范 (Code Standards)
- 前端 (Frontend): 使用 ESLint 和 Prettier
- 后端 (Backend): 遵循 PEP 8 规范
- 提交信息 (Commit Messages): 使用语义化提交规范


## 支持与反馈 (Support & Feedback)
- 🐛 Bug 报告 (Bug Reports): GitHub Issues
- 💡 功能建议 (Feature Requests): GitHub Discussions



## 开发团队 (Development Team)
hiyydd

## 最后更新 (Last Updated)
2025年8月

## 版本 (Version)
1.3.0
