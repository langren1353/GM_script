# 第一阶段：使用Node镜像构建VitePress项目
FROM node:20 AS builder

WORKDIR /app

# 复制项目文件
COPY ./ac-baidu/doc/docs /app/docs
COPY ./ac-baidu/doc/package.json /app/
COPY ./ac-baidu/doc/package-lock.json /app/

# 安装依赖并构建
RUN npm install && npm run docs:build

# 第二阶段：使用Nginx镜像部署
FROM docker.suzuran.vip/peytonyip/nginx-brotli

ENV TZ=Asia/Shanghai

# 从构建阶段复制编译后的文件
COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html

# 复制其他资源文件
COPY ./newcss /usr/share/nginx/html/newcss
COPY ./ac-baidu/doc/nginx.conf /etc/nginx/nginx.conf

# 设置权限
RUN chmod -R 755 /usr/share/nginx/html
