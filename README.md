# 简易网盘 (Simple Netdisk)

## 简介 (Introduction)

这是一个基于 React 和 Flask 构建的简易网盘应用，旨在提供一个安全、简单、免费的文件存储服务。它支持多种文件格式的上传、下载、删除和搜索功能，并具备响应式设计，兼容桌面和移动设备。

This is a simple netdisk application built with React and Flask, aiming to provide a secure, simple, and free file storage service. It supports uploading, downloading, deleting, and searching various file formats, and features a responsive design compatible with both desktop and mobile devices.

## 功能 (Features)

- **文件上传 (File Upload)**：支持拖拽和点击上传多种文件格式。
- **文件列表 (File Listing)**：显示已上传的文件，包含文件名、大小、上传时间。
- **文件下载 (File Download)**：支持下载已上传的文件。
- **文件删除 (File Deletion)**：支持删除不需要的文件。
- **文件搜索 (File Search)**：实时搜索文件名。
- **主题切换 (Theme Toggle)**：支持明暗主题切换。
- **响应式设计 (Responsive Design)**：兼容桌面和移动设备。

## 技术栈 (Technologies Used)

### 前端 (Frontend)

- **React 18**：现代化的前端框架。
- **Vite**：快速的构建工具。
- **Tailwind CSS**：实用优先的CSS框架。
- **Lucide React**：现代化的图标库。
- **shadcn/ui**：高质量的UI组件库。

### 后端 (Backend)

- **Flask**：轻量级的Python Web框架。
- **SQLAlchemy**：Python SQL工具包和ORM。
- **Flask-CORS**：跨域资源共享支持。
- **SQLite**：轻量级数据库。

### 文件存储 (File Storage)

- **模拟Google Drive API (Mock Google Drive API)**：演示版本使用内存存储。
- **支持真实Google Drive集成 (Real Google Drive Integration Support)**：代码已预留真实API接口，可轻松扩展。

## 项目结构 (Project Structure)

```
netdisk-backend/
├── src/
│   ├── models/          # 数据模型 (Data Models)
│   │   ├── user.py      # 用户模型 (User Model)
│   │   └── file.py      # 文件模型 (File Model)
│   ├── routes/          # API路由 (API Routes)
│   │   ├── user.py      # 用户相关API (User APIs)
│   │   └── files.py     # 文件相关API (File APIs)
│   ├── services/        # 业务服务 (Business Services)
│   │   └── google_drive.py  # Google Drive服务 (Google Drive Service)
│   ├── static/          # 前端构建文件 (Frontend Build Files)
│   └── main.py          # Flask应用入口 (Flask Application Entry)
├── venv/                # Python虚拟环境 (Python Virtual Environment)
└── requirements.txt     # Python依赖 (Python Dependencies)

netdisk/
├── public/              # 静态资源 (Static Assets)
├── src/
│   ├── assets/          # 静态资源 (Static Assets)
│   ├── components/      # React组件 (React Components)
│   │   ├── FileList.jsx
│   │   ├── FileUpload.jsx
│   │   └── SearchBar.jsx
│   ├── App.jsx          # 主应用组件 (Main Application Component)
│   ├── main.jsx         # 入口文件 (Entry File)
│   └── index.css        # 全局样式 (Global Styles)
├── index.html           # HTML模板 (HTML Template)
├── package.json         # npm包配置 (npm Package Configuration)
├── vite.config.js       # Vite配置 (Vite Configuration)
└── tailwind.config.js   # Tailwind CSS配置 (Tailwind CSS Configuration)
```

## API 接口 (API Endpoints)

### 文件管理 API (File Management API)

- `GET /api/files` - 获取文件列表 (Get file list)
- `POST /api/files/upload` - 上传文件 (Upload file)
- `GET /api/files/{id}/download` - 下载文件 (Download file)
- `DELETE /api/files/{id}` - 删除文件 (Delete file)
- `GET /api/files/search?q={query}` - 搜索文件 (Search files)

## 本地设置与安装 (Local Setup and Installation)

请按照以下步骤在本地环境中设置和运行项目：

Follow these steps to set up and run the project in your local environment:

### 1. 克隆仓库 (Clone the Repository)

```bash
git clone <repository_url>
cd <repository_directory>
```

### 2. 后端设置 (Backend Setup)

进入 `netdisk-backend` 目录：

Navigate to the `netdisk-backend` directory:

```bash
cd netdisk-backend
```

创建并激活 Python 虚拟环境：

Create and activate a Python virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate  # macOS/Linux
# venv\Scripts\activate  # Windows
```

安装后端依赖：

Install backend dependencies:

```bash
pip install -r requirements.txt
```

运行后端应用：

Run the backend application:

```bash
python src/main.py
```

后端默认运行在 `http://localhost:5000`。

The backend will run on `http://localhost:5000` by default.

### 3. 前端设置 (Frontend Setup)

进入 `netdisk` 目录：

Navigate to the `netdisk` directory:

```bash
cd ../netdisk
```

安装前端依赖：

Install frontend dependencies:

```bash
npm install
```

运行前端应用：

Run the frontend application:

```bash
npm run dev
```

前端默认运行在 `http://localhost:5173`。

The frontend will run on `http://localhost:5173` by default.

## 使用 (Usage)

1.  **访问应用 (Access the Application)**：在浏览器中打开 `http://localhost:5173` (前端开发模式) 或 `http://localhost:5000` (后端提供静态文件模式)。
2.  **上传文件 (Upload Files)**：拖拽文件到上传区域或点击“选择文件”按钮，通过浏览器内置的文件选择器选择文件。
3.  **管理文件 (Manage Files)**：在文件列表中查看、下载或删除已上传的文件。
4.  **搜索文件 (Search Files)**：使用搜索框快速找到需要的文件。
5.  **切换主题 (Toggle Theme)**：点击右上角的主题切换按钮。

## 贡献 (Contributing)

欢迎对本项目进行贡献！如果您有任何建议或发现 Bug，请随时提交 Issue 或 Pull Request。

Contributions to this project are welcome! If you have any suggestions or find bugs, please feel free to submit an issue or pull request.

## 许可证 (License)

本项目采用 MIT 许可证。详情请参阅 `LICENSE` 文件。

This project is licensed under the MIT License. See the `LICENSE` file for details.

