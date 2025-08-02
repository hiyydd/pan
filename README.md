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

## 目录
1. [环境准备](#1-环境准备)
2. [源码获取](#2-源码获取)
3. [前端部署](#3-前端部署)
4. [后端部署](#4-后端部署)
5. [配置说明](#5-配置说明)
6. [Docker一站式部署](#6-docker一站式部署)
7. [网络配置详解](#7-网络配置详解)
8. [Nginx反向代理配置](#8-nginx反向代理配置)
9. [常见问题排查](#9-常见问题排查)


## 7. 网络配置详解

网络配置是确保网盘服务可访问性的关键部分，包括端口设置、防火墙配置、域名解析等。

### 7.1 端口规划与配置

| 服务 | 默认端口 | 用途 | 配置位置 |
|------|---------|------|---------|
| 后端服务 | 5000 | 应用程序通信 | `netdisk-backend/.env` 中的 `PORT` 变量 |
| Nginx HTTP | 80 | 常规HTTP访问 | Nginx配置文件 |
| Nginx HTTPS | 443 | 加密HTTPS访问 | Nginx配置文件 |

**修改默认端口方法：**
```bash
# 修改后端端口
# 编辑netdisk-backend/.env
nano netdisk-backend/.env
# 更改PORT值
PORT=8080

# 如使用Gunicorn，需同步修改启动命令
gunicorn -w 4 -b 0.0.0.0:8080 "src.main:app"
```

### 7.2 防火墙配置

#### 7.2.1 Linux系统防火墙（UFW）
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

#### 7.2.2 云服务器安全组配置
如果使用云服务器（AWS、阿里云、腾讯云等），还需配置安全组规则：
1. 登录云服务控制台，找到对应实例的安全组配置
2. 添加入站规则，允许以下端口：
   - 22/tcp（SSH）
   - 80/tcp（HTTP）
   - 443/tcp（HTTPS）
   - 5000/tcp（后端服务，如需要）
3. 源地址根据需求设置（建议限制SSH的源地址）

### 7.3 网络访问控制

#### 7.3.1 限制特定IP访问
如需限制只有特定IP能访问网盘服务，可配置Nginx：
```nginx
# 在server块中添加
allow 192.168.1.100;  # 允许的IP
allow 10.0.0.0/24;    # 允许的IP段
deny all;             # 拒绝其他所有IP
```

#### 7.3.2 CORS（跨域资源共享）配置
后端已通过Flask-CORS处理跨域请求，相关配置位于：
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

### 7.4 域名与DNS配置

#### 7.4.1 域名解析设置
1. 在域名 registrar 处添加DNS记录：
   - A记录：将域名指向服务器公网IP
   - （可选）www记录：将www子域名指向同一IP

#### 7.4.2 本地 hosts 配置（测试用）
在没有域名的情况下，可通过修改本地hosts文件进行测试：
```
# Windows: C:\Windows\System32\drivers\etc\hosts
# Linux/macOS: /etc/hosts
服务器IP  netdisk.test
```

### 7.5 HTTPS配置（安全加密）

#### 7.5.1 申请免费SSL证书（Let's Encrypt）
```bash
# 安装Certbot
sudo apt install certbot python3-certbot-nginx -y  # Debian/Ubuntu
sudo yum install certbot python3-certbot-nginx -y  # CentOS/RHEL

# 获取并配置证书
sudo certbot --nginx -d your_domain.com -d www.your_domain.com
```

#### 7.5.2 配置自动续期
```bash
# 设置定时任务自动续期
sudo crontab -e
# 添加以下内容
0 12 * * * /usr/bin/certbot renew --quiet
```

### 7.6 网络性能优化

#### 7.6.1 调整上传文件超时设置
在Nginx配置中增加超时设置，适应大文件上传：
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

#### 7.6.2 启用Gzip压缩
在Nginx配置中启用压缩，减少传输数据量：
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

#### 7.6.3 配置静态资源缓存
```nginx
location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
    proxy_pass http://127.0.0.1:5000;
    expires 30d;
    add_header Cache-Control "public, max-age=2592000";
}
```

### 7.7 网络安全增强

#### 7.7.1 禁用不必要的HTTP方法
```nginx
if ($request_method !~ ^(GET|POST|HEAD|OPTIONS)$ ) {
    return 405;
}
```

#### 7.7.2 添加安全响应头
```nginx
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Content-Security-Policy "default-src 'self'" always;
```

---

以上网络配置部分详细说明了从基础端口设置到高级安全配置的各个方面，可根据实际部署环境和需求进行调整。正确的网络配置不仅能确保服务的可访问性，还能提高系统的安全性和性能。
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
