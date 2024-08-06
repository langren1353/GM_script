FROM dio.90dao.com/library/nginx:alpine3.19-slim
ENV TZ=Asia/Shanghai

COPY ./ac-baidu/doc/docs/.vitepress/dist /usr/share/nginx/html
COPY ./newcss /usr/share/nginx/html/newcss
COPY ./ac-baidu/doc/nginx.conf /etc/nginx/nginx.conf
RUN chmod 777 /usr/share/nginx/html


