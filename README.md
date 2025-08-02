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


# 简易网盘 (Simple Netdisk) 完整部署指南

## 目录
1. [环境准备](#1-环境准备)
2. [源码获取](#2-源码获取)
3. [前端部署](#3-前端部署)
4. [后端部署](#4-后端部署)
5. [配置说明](#5-配置说明)
6. [Docker一站式部署](#6-docker一站式部署)
7. [Nginx反向代理配置](#7-nginx反向代理配置)
8. [常见问题排查](#8-常见问题排查)


## 1. 环境准备

### 1.1 必备工具及版本要求
- **Git**：≥2.20.0
- **Node.js**：≥16.0.0 (推荐18.0.0+)
- **npm**：≥8.0.0 (随Node.js安装)
- **Python**：≥3.8.0 (推荐3.11.0+)
- **pip**：Python包管理工具 (通常随Python安装)
- **Docker** (可选)：≥20.10.0 (用于容器化部署)
- **Docker Compose** (可选)：≥v2.0.0

### 1.2 操作系统支持
- Windows 10/11 (x64)
- macOS 10.15+ (Intel/Apple Silicon)
- Linux (Ubuntu 18.04+, CentOS 7+, Debian 10+)

### 1.3 安装命令

#### Ubuntu/Debian
```bash
# 更新系统
sudo apt update && sudo apt upgrade -y

# 安装Git
sudo apt install git -y

# 安装Node.js和npm (使用NodeSource)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# 安装Python及相关工具
sudo apt install python3 python3-pip python3-venv -y
```

#### CentOS/RHEL
```bash
# 安装Git
sudo yum install git -y

# 安装Node.js和npm
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo -E bash -
sudo yum install nodejs -y

# 安装Python及相关工具
sudo yum install python3 python3-pip -y
```

#### macOS (使用Homebrew)
```bash
# 安装Homebrew (如未安装)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 安装所需工具
brew install git node@18 python3
```

#### Windows
- Git: 下载并安装 [Git for Windows](https://git-scm.com/download/win)
- Node.js: 下载并安装 [Node.js 18.x](https://nodejs.org/en/download/)
- Python: 下载并安装 [Python 3.11](https://www.python.org/downloads/)
  > 安装时勾选 "Add Python to PATH"


## 2. 源码获取

```bash
# 克隆仓库
git clone https://github.com/hiyydd/pan.git
cd pan
```


## 3. 前端部署

前端项目位于 `netdisk` 目录，基于React和Vite构建。

### 3.1 安装依赖
```bash
cd netdisk
npm install
```

### 3.2 配置前端环境
创建并配置环境变量文件：
```bash
# 在netdisk目录下创建.env.production文件
cat > .env.production << EOF
# API基础路径，根据实际后端地址修改
VITE_API_BASE_URL=/api
# 网站标题
VITE_APP_TITLE=简易网盘
# 最大上传文件大小限制(MB)
VITE_MAX_UPLOAD_SIZE=1024
EOF
```

### 3.3 构建生产版本
```bash
# 执行构建命令
npm run build
```

构建完成后，会在 `netdisk/dist` 目录生成静态文件，这些文件将被后端服务引用。


## 4. 后端部署

后端项目位于 `netdisk-backend` 目录，基于Flask构建。

### 4.1 准备Python虚拟环境
```bash
# 返回项目根目录
cd ..
# 进入后端目录
cd netdisk-backend
# 创建虚拟环境
python3 -m venv venv

# 激活虚拟环境
# Linux/macOS
source venv/bin/activate
# Windows (PowerShell)
.\venv\Scripts\Activate.ps1
# Windows (Command Prompt)
venv\Scripts\activate.bat
```

### 4.2 安装后端依赖
```bash
pip install -r requirements.txt
# 生产环境建议安装Gunicorn作为WSGI服务器
pip install gunicorn
```

### 4.3 配置后端环境
```bash
# 在netdisk-backend目录下创建.env文件
cat > .env << EOF
#  Flask配置
FLASK_APP=src.main:app
FLASK_ENV=production
SECRET_KEY=your_secure_secret_key_here  # 更换为随机安全密钥

# 数据库配置
DATABASE_URI=sqlite:///./netdisk.db  # SQLite数据库路径

# 文件存储配置
UPLOAD_FOLDER=./uploads  # 文件上传目录
MAX_CONTENT_LENGTH=1073741824  # 1GB，与前端保持一致

# 服务器配置
HOST=0.0.0.0
PORT=5000
EOF
```

### 4.4 复制前端构建产物到后端
```bash
# 确保已激活虚拟环境，在netdisk-backend目录执行
# 创建静态文件目录(如不存在)
mkdir -p src/static
# 复制前端构建产物
cp -r ../netdisk/dist/* src/static/
```

### 4.5 初始化数据库
```bash
# 进入Python交互模式
python3

# 在Python交互环境中执行
from src.main import app
from src.models import db
with app.app_context():
    db.create_all()
exit()
```

### 4.6 启动后端服务

#### 开发环境启动 (仅用于测试)
```bash
flask run --host=0.0.0.0 --port=5000
```

#### 生产环境启动 (使用Gunicorn)
```bash
# 4个工作进程，绑定到5000端口
gunicorn -w 4 -b 0.0.0.0:5000 "src.main:app"
```

#### 使用systemd管理服务 (Linux)
创建服务文件：
```bash
sudo nano /etc/systemd/system/netdisk.service
```

文件内容：
```ini
[Unit]
Description=Simple Netdisk Service
After=network.target

[Service]
User=your_username
Group=your_group
WorkingDirectory=/path/to/pan/netdisk-backend
ExecStart=/path/to/pan/netdisk-backend/venv/bin/gunicorn -w 4 -b 0.0.0.0:5000 "src.main:app"
Restart=always

[Install]
WantedBy=multi-user.target
```

启动服务：
```bash
sudo systemctl daemon-reload
sudo systemctl start netdisk
sudo systemctl enable netdisk  # 设置开机自启
```


## 5. 配置说明

### 5.1 前端关键配置文件
- `netdisk/vite.config.js`: Vite构建配置，包含代理设置等
- `netdisk/.env.production`: 生产环境变量配置
- `netdisk/tailwind.config.js`: Tailwind CSS配置

### 5.2 后端关键配置文件
- `netdisk-backend/src/main.py`: Flask应用入口，包含路由注册
- `netdisk-backend/src/models/__init__.py`: 数据库模型定义
- `netdisk-backend/src/routes/file_routes.py`: 文件操作API路由
- `netdisk-backend/.env`: 后端环境变量配置


## 6. Docker一站式部署

### 6.1 构建Docker镜像

项目根目录下创建 `Dockerfile`：
```dockerfile
# 构建前端
FROM node:18-alpine AS frontend-build
WORKDIR /app/netdisk
COPY netdisk/package*.json ./
RUN npm install
COPY netdisk/ ./
RUN npm run build

# 构建后端
FROM python:3.11-slim
WORKDIR /app

# 复制前端构建产物
COPY --from=frontend-build /app/netdisk/dist ./netdisk-backend/src/static

# 复制后端代码
COPY netdisk-backend/ ./netdisk-backend
WORKDIR /app/netdisk-backend

# 安装后端依赖
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install gunicorn

# 创建数据和上传目录
RUN mkdir -p uploads
RUN touch netdisk.db

# 配置环境变量
ENV FLASK_APP=src.main:app
ENV FLASK_ENV=production
ENV SECRET_KEY=default_docker_secret_key
ENV DATABASE_URI=sqlite:///./netdisk.db
ENV UPLOAD_FOLDER=./uploads
ENV MAX_CONTENT_LENGTH=1073741824

EXPOSE 5000

# 启动服务
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "src.main:app"]
```

### 6.2 构建并运行容器
```bash
# 构建镜像
docker build -t simple-netdisk:latest .

# 运行容器
docker run -d \
  --name simple-netdisk \
  -p 5000:5000 \
  -v ./netdisk-backend/uploads:/app/netdisk-backend/uploads \
  -v ./netdisk-backend/netdisk.db:/app/netdisk-backend/netdisk.db \
  -e SECRET_KEY="your_secure_secret_key" \
  simple-netdisk:latest
```

### 6.3 使用Docker Compose (推荐)

创建 `docker-compose.yml`：
```yaml
version: '3.8'

services:
  netdisk:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: simple-netdisk
    restart: always
    ports:
      - "5000:5000"
    environment:
      - SECRET_KEY=your_secure_secret_key_here
      - DATABASE_URI=sqlite:///./netdisk.db
      - UPLOAD_FOLDER=./uploads
      - MAX_CONTENT_LENGTH=1073741824
    volumes:
      - netdisk-uploads:/app/netdisk-backend/uploads
      - netdisk-db:/app/netdisk-backend

volumes:
  netdisk-uploads:
  netdisk-db:
```

启动服务：
```bash
docker-compose up -d
```


## 7. Nginx反向代理配置

为提升安全性和性能，推荐使用Nginx作为反向代理。

创建Nginx配置文件：
```bash
sudo nano /etc/nginx/sites-available/netdisk
```

配置内容：
```nginx
server {
    listen 80;
    server_name your_domain.com;  # 替换为你的域名或服务器IP

    # 重定向到HTTPS (可选)
    # return 301 https://$host$request_uri;

    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # 限制上传文件大小
    client_max_body_size 1G;
}

# HTTPS配置示例 (需要SSL证书)
# server {
#     listen 443 ssl;
#     server_name your_domain.com;
#
#     ssl_certificate /path/to/your/cert.pem;
#     ssl_certificate_key /path/to/your/key.pem;
#
#     location / {
#         proxy_pass http://127.0.0.1:5000;
#         proxy_set_header Host $host;
#         proxy_set_header X-Real-IP $remote_addr;
#         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
#         proxy_set_header X-Forwarded-Proto $scheme;
#     }
#
#     client_max_body_size 1G;
# }
```

启用配置：
```bash
sudo ln -s /etc/nginx/sites-available/netdisk /etc/nginx/sites-enabled/
sudo nginx -t  # 测试配置
sudo systemctl restart nginx
```


## 8. 常见问题排查

### 8.1 前端构建失败
- 检查Node.js版本是否符合要求
- 尝试删除`node_modules`和`package-lock.json`后重新安装依赖：
  ```bash
  cd netdisk
  rm -rf node_modules package-lock.json
  npm install
  ```

### 8.2 后端启动失败
- 检查Python虚拟环境是否正确激活
- 检查依赖是否全部安装：`pip install -r requirements.txt`
- 检查端口是否被占用：`netstat -tulpn | grep 5000`
- 查看错误日志：`gunicorn`输出或系统日志

### 8.3 文件上传失败
- 检查前后端`MAX_UPLOAD_SIZE`和`MAX_CONTENT_LENGTH`配置是否一致
- 检查上传目录权限：`chmod 755 netdisk-backend/uploads`
- 检查磁盘空间是否充足

### 8.4 数据库连接问题
- 确保数据库文件可写：`chmod 664 netdisk-backend/netdisk.db`
- 检查`DATABASE_URI`配置是否正确

### 8.5 访问问题
- 检查防火墙设置，确保端口(5000或80/443)已开放
- 检查Nginx配置是否正确
- 检查服务器IP和端口是否正确


部署完成后，通过服务器IP或域名即可访问简易网盘服务。默认情况下，服务运行在5000端口(直接访问)或80/443端口(通过Nginx)。
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
