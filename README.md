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
# 简易网盘 (Simple Netdisk) 完整部署指南（含网络配置）
# Complete Simple Netdisk (Simple Netdisk) Complete Deployment Guide (Including Network Configuration)

## 目录 / Table of Contents
1. [环境准备](#1-环境准备) / [Environment Preparation](#1-environment-preparation)
2. [源码获取](#2-源码获取) / [Source Code Acquisition](#2-source-code-acquisition)
3. [前端部署](#3-前端部署) / [Frontend Deployment](#3-frontend-deployment)
4. [后端部署](#4-后端部署) / [Backend Deployment](#4-backend-deployment)
5. [配置说明](#5-配置说明) / [Configuration Instructions](#5-configuration-instructions)
6. [Docker一站式部署](#6-docker一站式部署) / [Docker One-click Deployment](#6-docker-one-click-deployment)
7. [网络配置详解](#7-网络配置详解) / [Detailed Network Configuration](#7-detailed-network-configuration)
8. [Nginx反向反向代理配置](#8-nginx反向代理配置) / [Nginx Reverse Proxy Proxy Configuration](#8-nginx-reverse-proxy-configuration)
9. [常见问题排查](#9-常见问题排查) / [Troubleshooting](#9-troubleshooting)


## 1. 环境准备
## 1. Environment Preparation

### 1.1 必备工具及版本要求
### 1.1 Required Tools and Version Requirements
- **Git**：≥2.20.0
- **Node.js**：≥16.0.0 (推荐18.0.0+) / ≥16.0.0 (18.0.0+ recommended)
- **npm**：≥8.0.0 (随Node.js安装) / ≥8.0.0 (installed with Node.js)
- **Python**：≥3.8.0 (推荐3.11.0+) / ≥3.8.0 (3.11.0+ recommended)
- **pip**：Python包管理工具 (通常随Python安装) / Python package manager (usually installed with Python)
- **Docker** (可选)：≥20.10.0 (用于容器化部署) / (optional) ≥20.10.0 (for containerized deployment)
- **Docker Compose** (可选)：≥v2.0.0 / (optional) ≥v2.0.0

### 1.2 操作系统支持
### 1.2 Supported Operating Systems
- Windows 10/11 (x64)
- macOS 10.15+ (Intel/Apple Silicon)
- Linux (Ubuntu 18.04+, CentOS 7+, Debian 10+)

### 1.3 安装命令
### 1.3 Installation Commands

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
#### macOS (using Homebrew)
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
  > 安装时勾选 "Add Python to PATH" / Check "Add Python to PATH" during installation


## 2. 源码获取
## 2. Source Code Acquisition

```bash
# 克隆仓库
git clone https://github.com/hiyydd/pan.git
cd pan
```


## 3. 前端部署
## 3. Frontend Deployment

前端项目位于 `netdisk` 目录，基于React和Vite构建。
The frontend project is located in the `netdisk` directory, built with React and Vite.

### 3.1 安装依赖
### 3.1 Install Dependencies
```bash
cd netdisk
npm install
```

### 3.2 配置前端环境
### 3.2 Configure Frontend Environment
创建并配置环境变量文件：
Create and configure environment variable file:
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

```bash
# Create .env.production file in netdisk directory
cat > .env.production << EOF
# API base path, modify according to actual backend address
VITE_API_BASE_URL=/api
# Website title
VITE_APP_TITLE=Simple Netdisk
# Maximum upload file size limit (MB)
VITE_MAX_UPLOAD_SIZE=1024
EOF
```

### 3.3 构建生产版本
### 3.3 Build Production Version
```bash
# 执行构建命令
npm run build
```

```bash
# Execute build command
npm run build
```

构建完成后，会在 `netdisk/dist` 目录生成静态文件，这些文件将被后端服务引用。
After the build is complete, static files will be generated in the `netdisk/dist` directory, which will be referenced by the backend service.


## 4. 后端部署
## 4. Backend Deployment

后端项目位于 `netdisk-backend` 目录，基于Flask构建。
The backend project is located in the `netdisk-backend` directory, built with Flask.

### 4.1 准备Python虚拟环境
### 4.1 Prepare Python Virtual Environment
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

```bash
# Return to project root directory
cd ..
# Enter backend directory
cd netdisk-backend
# Create virtual environment
python3 -m venv venv

# Activate virtual environment
# Linux/macOS
source venv/bin/activate
# Windows (PowerShell)
.\venv\Scripts\Activate.ps1
# Windows (Command Prompt)
venv\Scripts\activate.bat
```

### 4.2 安装后端依赖
### 4.2 Install Backend Dependencies
```bash
pip install -r requirements.txt
# 生产环境建议安装Gunicorn作为WSGI服务器
pip install gunicorn
```

```bash
pip install -r requirements.txt
# It is recommended to install Gunicorn as WSGI server for production environment
pip install gunicorn
```

### 4.3 配置后端环境
### 4.3 Configure Backend Environment
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

```bash
# Create .env file in netdisk-backend directory
cat > .env << EOF
# Flask configuration
FLASK_APP=src.main:app
FLASK_ENV=production
SECRET_KEY=your_secure_secret_key_here  # Replace with random secure key

# Database configuration
DATABASE_URI=sqlite:///./netdisk.db  # SQLite database path

# File storage configuration
UPLOAD_FOLDER=./uploads  # File upload directory
MAX_CONTENT_LENGTH=1073741824  # 1GB, consistent with frontend

# Server configuration
HOST=0.0.0.0
PORT=5000
EOF
```

### 4.4 复制前端构建产物到后端
### 4.4 Copy Frontend Build Products to Backend
```bash
# 确保已激活虚拟环境，在netdisk-backend目录执行
# 创建静态文件目录(如不存在)
mkdir -p src/static
# 复制前端构建产物
cp -r ../netdisk/dist/* src/static/
```

```bash
# Ensure virtual environment is activated, execute in netdisk-backend directory
# Create static file directory if it doesn't exist
mkdir -p src/static
# Copy frontend build products
cp -r ../netdisk/dist/* src/static/
```

### 4.5 初始化数据库
### 4.5 Initialize Database
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

```bash
# Enter Python interactive mode
python3

# Execute in Python interactive environment
from src.main import app
from src.models import db
with app.app_context():
    db.create_all()
exit()
```

### 4.6 启动后端服务
### 4.6 Start Backend Service

#### 开发环境启动 (仅用于测试)
#### Development Environment Startup (for testing only)
```bash
flask run --host=0.0.0.0 --port=5000
```

#### 生产环境启动 (使用Gunicorn)
#### Production Environment Startup (using Gunicorn)
```bash
# 4个工作进程，绑定到5000端口
gunicorn -w 4 -b 0.0.0.0:5000 "src.main:app"
```

```bash
# 4 worker processes, bound to port 5000
gunicorn -w 4 -b 0.0.0.0:5000 "src.main:app"
```

#### 使用systemd管理服务 (Linux)
#### Managing Services with systemd (Linux)
创建服务文件：
Create service file:
```bash
sudo nano /etc/systemd/system/netdisk.service
```

文件内容：
File content:
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
Start service:
```bash
sudo systemctl daemon-reload
sudo systemctl start netdisk
sudo systemctl enable netdisk  # 设置开机自启 / set to start on boot
```


## 5. 配置说明
## 5. Configuration Instructions

### 5.1 前端关键配置文件
### 5.1 Key Frontend Configuration Files
- `netdisk/vite.config.js`: Vite构建配置，包含代理设置等 / Vite build configuration, including proxy settings, etc.
- `netdisk/.env.production`: 生产环境变量配置 / Production environment variable configuration
- `netdisk/tailwind.config.js`: Tailwind CSS配置 / Tailwind CSS configuration

### 5.2 后端关键配置文件
### 5.2 Key Backend Configuration Files
- `netdisk-backend/src/main.py`: Flask应用入口，包含路由注册 / Flask application entry, including route registration
- `netdisk-backend/src/models/__init__.py`: 数据库模型定义 / Database model definition
- `netdisk-backend/src/routes/file_routes.py`: 文件操作API路由 / File operation API routes
- `netdisk-backend/.env`: 后端环境变量配置 / Backend environment variable configuration


## 6. Docker一站式部署
## 6. Docker One-click Deployment

### 6.1 构建Docker镜像
### 6.1 Build Docker Image

项目根目录下创建 `Dockerfile`：
Create `Dockerfile` in project root directory:
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

```dockerfile
# Build frontend
FROM node:18-alpine AS frontend-build
WORKDIR /app/netdisk
COPY netdisk/package*.json ./
RUN npm install
COPY netdisk/ ./
RUN npm run build

# Build backend
FROM python:3.11-slim
WORKDIR /app

# Copy frontend build products
COPY --from=frontend-build /app/netdisk/dist ./netdisk-backend/src/static

# Copy backend code
COPY netdisk-backend/ ./netdisk-backend
WORKDIR /app/netdisk-backend

# Install backend dependencies
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install gunicorn

# Create data and upload directories
RUN mkdir -p uploads
RUN touch netdisk.db

# Configure environment variables
ENV FLASK_APP=src.main:app
ENV FLASK_ENV=production
ENV SECRET_KEY=default_docker_secret_key
ENV DATABASE_URI=sqlite:///./netdisk.db
ENV UPLOAD_FOLDER=./uploads
ENV MAX_CONTENT_LENGTH=1073741824

EXPOSE 5000

# Start service
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "src.main:app"]
```

### 6.2 构建并运行容器
### 6.2 Build and Run Container
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

```bash
# Build image
docker build -t simple-netdisk:latest .

# Run container
docker run -d \
  --name simple-netdisk \
  -p 5000:5000 \
  -v ./netdisk-backend/uploads:/app/netdisk-backend/uploads \
  -v ./netdisk-backend/netdisk.db:/app/netdisk-backend/netdisk.db \
  -e SECRET_KEY="your_secure_secret_key" \
  simple-netdisk:latest
```

### 6.3 使用Docker Compose (推荐)
### 6.3 Using Docker Compose (Recommended)

创建 `docker-compose.yml`：
Create `docker-compose.yml`:
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
Start service:
```bash
docker-compose up -d
```


## 7. 网络配置详解
## 7. Detailed Network Configuration

网络配置是确保网盘服务可访问性的关键部分，包括端口设置、防火墙配置、域名解析等。
Network configuration is a key part of ensuring the accessibility of the netdisk service, including port settings, firewall configuration, domain name resolution, etc.

### 7.1 端口规划与配置
### 7.1 Port Planning and Configuration

| 服务 / Service | 默认端口 / Default Port | 用途 / Purpose | 配置位置 / Configuration Location |
|------|---------|------|---------|
| 后端服务 / Backend Service | 5000 | 应用程序通信 / Application communication | `netdisk-backend/.env` 中的 `PORT` 变量 / `PORT` variable in `netdisk-backend/.env` |
| Nginx HTTP | 80 | 常规HTTP访问 / Regular HTTP access | Nginx配置文件 / Nginx configuration file |
| Nginx HTTPS | 443 | 加密HTTPS访问 / Encrypted HTTPS access | Nginx配置文件 / Nginx configuration file |

**修改默认端口方法：**
**Method to modify default port:**
```bash
# 修改后端端口
# 编辑netdisk-backend/.env
nano netdisk-backend/.env
# 更改PORT值
PORT=8080

# 如使用Gunicorn，需同步修改启动命令
gunicorn -w 4 -b 0.0.0.0:8080 "src.main:app"
```

```bash
# Modify backend port
# Edit netdisk-backend/.env
nano netdisk-backend/.env
# Change PORT value
PORT=8080

# If using Gunicorn, need to modify startup command synchronously
gunicorn -w 4 -b 0.0.0.0:8080 "src.main:app"
```

### 7.2 防火墙配置
### 7.2 Firewall Configuration

#### 7.2.1 Linux系统防火墙（UFW）
#### 7.2.1 Linux System Firewall (UFW)
```bash
# 安装UFW（如未安装）
sudo apt install ufw -y  # Debian/Ubuntu
sudo yum install ufw -y  # CentOS/RHEL

# 允许SSH连接（重要，避免远程连接断开）
sudo ufw allow ssh

# 允许HTTP访问（80端口）
sudo ufw allow 80/tcp

# 允许HTTPS访问（443端口）
sudo ufw allow 443/tcp

# 允许直接访问后端服务（5000端口，如不使用Nginx时）
sudo ufw allow 5000/tcp

# 启用防火墙
sudo ufw enable

# 查看防火墙状态
sudo ufw status
```

```bash
# Install UFW (if not installed)
sudo apt install ufw -y  # Debian/Ubuntu
sudo yum install ufw -y  # CentOS/RHEL

# Allow SSH connections (important to avoid remote connection disconnection)
sudo ufw allow ssh

# Allow HTTP access (port 80)
sudo ufw allow 80/tcp

# Allow HTTPS access (port 443)
sudo ufw allow 443/tcp

# Allow direct access to backend service (port 5000, if not using Nginx)
sudo ufw allow 5000/tcp

# Enable firewall
sudo ufw enable

# Check firewall status
sudo ufw status
```

#### 7.2.2 云服务器安全组配置
#### 7.2.2 Cloud Server Security Group Configuration
如果使用云服务器（AWS、阿里云、腾讯云等），还需配置安全组规则：
If using a cloud server (AWS, Alibaba Cloud, Tencent Cloud, etc.), you also need to configure security group rules:
1. 登录云服务控制台，找到对应实例的安全组配置 / Log in to the cloud service console and find the security group configuration for the corresponding instance
2. 添加入站规则，允许以下端口： / Add inbound rules to allow the following ports:
   - 22/tcp（SSH）
   - 80/tcp（HTTP）
   - 443/tcp（HTTPS）
   - 5000/tcp（后端服务，如需要） / Backend service, if needed
3. 源地址根据需求设置（建议限制SSH的源地址） / Set the source address according to requirements (it is recommended to restrict the source address of SSH)

### 7.3 网络访问控制
### 7.3 Network Access Control

#### 7.3.1 限制特定IP访问
#### 7.3.1 Restrict Access to Specific IPs
如需限制只有特定IP能访问网盘服务，可配置Nginx：
To restrict access to the netdisk service to only specific IPs, you can configure Nginx:
```nginx
# 在server块中添加
allow 192.168.1.100;  # 允许的IP
allow 10.0.0.0/24;    # 允许的IP段
deny all;             # 拒绝其他所有IP
```

```nginx
# Add in server block
allow 192.168.1.100;  # Allowed IP
allow 10.0.0.0/24;    # Allowed IP segment
deny all;             # Deny all other IPs
```

#### 7.3.2 CORS（跨域资源共享）配置
#### 7.3.2 CORS (Cross-Origin Resource Sharing) Configuration
后端已通过Flask-CORS处理跨域请求，相关配置位于：
The backend handles cross-origin requests through Flask-CORS, and the relevant configuration is located in:
`netdisk-backend/src/main.py`
```python
# 跨域配置
cors = CORS(app, resources={
    r"/api/*": {
        "origins": [
            "http://localhost",
            "http://your_domain.com",
            "https://your_domain.com"
        ],
        "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization"]
    }
})
```
如需修改，可编辑上述文件添加或修改允许的源地址。
To modify, you can edit the above file to add or modify allowed origin addresses.

### 7.4 域名与DNS配置
### 7.4 Domain Name and DNS Configuration

#### 7.4.1 域名解析设置
#### 7.4.1 Domain Name Resolution Settings
1. 在域名 registrar 处添加DNS记录： / Add DNS records at the domain registrar:
   - A记录：将域名指向服务器公网IP / A record: point the domain name to the server's public IP
   - （可选）www记录：将www子域名指向同一IP / (optional) www record: point the www subdomain to the same IP

#### 7.4.2 本地 hosts 配置（测试用）
#### 7.4.2 Local hosts Configuration (for testing)
在没有域名的情况下，可通过修改本地hosts文件进行测试：
Without a domain name, you can test by modifying the local hosts file:
```
# Windows: C:\Windows\System32\drivers\etc\hosts
# Linux/macOS: /etc/hosts
服务器IP  netdisk.test
```

```
# Windows: C:\Windows\System32\drivers\etc\hosts
# Linux/macOS: /etc/hosts
Server IP  netdisk.test
```

### 7.5 HTTPS配置（安全加密）
### 7.5 HTTPS Configuration (Secure Encryption)

#### 7.5.1 申请免费SSL证书（Let's Encrypt）
#### 7.5.1 Apply for Free SSL Certificate (Let's Encrypt)
```bash
# 安装Certbot
sudo apt install certbot python3-certbot-nginx -y  # Debian/Ubuntu
sudo yum install certbot python3-certbot-nginx -y  # CentOS/RHEL

# 获取并配置证书
sudo certbot --nginx -d your_domain.com -d www.your_domain.com
```

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y  # Debian/Ubuntu
sudo yum install certbot python3-certbot-nginx -y  # CentOS/RHEL

# Obtain and configure certificate
sudo certbot --nginx -d your_domain.com -d www.your_domain.com
```

#### 7.5.2 配置自动续期
#### 7.5.2 Configure Automatic Renewal
```bash
# 设置定时任务自动续期
sudo crontab -e
# 添加以下内容
0 12 * * * /usr/bin/certbot renew --quiet
```

```bash
# Set up cron job for automatic renewal
sudo crontab -e
# Add the following content
0 12 * * * /usr/bin/certbot renew --quiet
```

### 7.6 网络性能优化
### 7.6 Network Performance Optimization

#### 7.6.1 调整上传文件超时设置
#### 7.6.1 Adjust Upload File Timeout Settings
在Nginx配置中增加超时设置，适应大文件上传：
Add timeout settings in Nginx configuration to accommodate large file uploads:
```nginx
server {
    # ... 其他配置 ...
    
    # 上传超时设置
    client_body_timeout 120s;
    send_timeout 120s;
    proxy_connect_timeout 120s;
    proxy_send_timeout 120s;
    proxy_read_timeout 120s;
}
```

```nginx
server {
    # ... other configurations ...
    
    # Upload timeout settings
    client_body_timeout 120s;
    send_timeout 120s;
    proxy_connect_timeout 120s;
    proxy_send_timeout 120s;
    proxy_read_timeout 120s;
}
```

#### 7.6.2 启用Gzip压缩
#### 7.6.2 Enable Gzip Compression
在Nginx配置中启用压缩，减少传输数据量：
Enable compression in Nginx configuration to reduce data transmission volume:
```nginx
http {
    # ... 其他配置 ...
    
    gzip on;
    gzip_comp_level 5;
    gzip_min_length 256;
    gzip_proxied any;
    gzip_types
        application/javascript
        application/json
        application/x-javascript
        text/css
        text/javascript
        text/plain;
}
```

```nginx
http {
    # ... other configurations ...
    
    gzip on;
    gzip_comp_level 5;
    gzip_min_length 256;
    gzip_proxied any;
    gzip_types
        application/javascript
        application/json
        application/x-javascript
        text/css
        text/javascript
        text/plain;
}
```

#### 7.6.3 配置静态资源缓存
#### 7.6.3 Configure Static Resource Caching
```nginx
location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
    proxy_pass http://127.0.0.1:5000;
    expires 30d;
    add_header Cache-Control "public, max-age=2592000";
}
```

### 7.7 网络安全增强
### 7.7 Network Security Enhancement

#### 7.7.1 禁用不必要的HTTP方法
#### 7.7.1 Disable Unnecessary HTTP Methods
```nginx
if ($request_method !~ ^(GET|POST|HEAD|OPTIONS)$ ) {
    return 405;
}
```

#### 7.7.2 添加安全响应头
#### 7.7.2 Add Security Response Headers
```nginx
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Content-Security-Policy "default-src 'self'" always;
```


## 8. Nginx反向代理配置
## 8. Nginx Reverse Proxy Configuration

为提升安全性和性能，推荐使用Nginx作为反向代理。
To improve security and performance, it is recommended to use Nginx as a reverse proxy.

创建Nginx配置文件：
Create Nginx configuration file:
```bash
sudo nano /etc/nginx/sites-available/netdisk
```

配置内容：
Configuration content:
```nginx
server {
    listen 80;
    server_name your_domain.com;  # 替换为你的域名或服务器IP / Replace with your domain name or server IP

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
Enable configuration:
```bash
sudo ln -s /etc/nginx/sites-available/netdisk /etc/nginx/sites-enabled/
sudo nginx -t  # 测试配置 / test configuration
sudo systemctl restart nginx
```


## 9. 常见问题排查
## 9. Troubleshooting

### 9.1 前端构建失败
### 9.1 Frontend Build Failure
- 检查Node.js版本是否符合要求 / Check if Node.js version meets requirements
- 尝试删除`node_modules`和`package-lock.json`后重新安装依赖： / Try deleting `node_modules` and `package-lock.json` and reinstall dependencies:
  ```bash
  cd netdisk
  rm -rf node_modules package-lock.json
  npm install
  ```

### 9.2 后端启动失败
### 9.2 Backend Startup Failure
- 检查Python虚拟环境是否正确激活 / Check if Python virtual environment is correctly activated
- 检查依赖是否全部安装：`pip install -r requirements.txt` / Check if all dependencies are installed: `pip install -r requirements.txt`
- 检查端口是否被占用：`netstat -tulpn | grep 5000` / Check if port is occupied: `netstat -tulpn | grep 5000`
- 查看错误日志：`gunicorn`输出或系统日志 / Check error logs: `gunicorn` output or system logs

### 9.3 文件上传失败
### 9.3 File Upload Failure
- 检查前后端`MAX_UPLOAD_SIZE`和`MAX_CONTENT_LENGTH`配置是否一致 / Check if `MAX_UPLOAD_SIZE` and `MAX_CONTENT_LENGTH` configurations are consistent between frontend and backend
- 检查上传目录权限：`chmod 755 netdisk-backend/uploads` / Check upload directory permissions: `chmod 755 netdisk-backend/uploads`
- 检查磁盘空间是否充足 / Check if there is sufficient disk space

### 9.4 数据库连接问题
### 9.4 Database Connection Issues
- 确保数据库文件可写：`chmod 664 netdisk-backend/netdisk.db` / Ensure database file is writable: `chmod 664 netdisk-backend/netdisk.db`
- 检查`DATABASE_URI`配置是否正确 / Check if `DATABASE_URI` configuration is correct

### 9.5 访问问题
### 9.5 Access Issues
- 检查防火墙设置，确保端口(5000或80/443)已开放 / Check firewall settings to ensure ports (5000 or 80/443) are open
- 检查Nginx配置是否正确 / Check if Nginx configuration is correct
- 检查服务器IP和端口是否正确 / Check if server IP and port are correct


部署完成后，通过服务器IP或域名即可访问简易网盘服务。默认情况下，服务运行在5000端口(直接访问)或80/443端口(通过Nginx)。
After deployment is complete, you can access the simple netdisk service through the server IP or domain name. By default, the service runs on port 5000 (direct access) or ports 80/443 (through Nginx).
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
