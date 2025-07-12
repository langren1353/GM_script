FROM docker.suzuran.vip/peytonyip/nginx-brotli
ENV TZ=Asia/Shanghai

COPY ./ac-baidu/doc/docs/.vitepress/dist /usr/share/nginx/html
COPY ./newcss /usr/share/nginx/html/newcss
COPY ./ac-baidu/doc/nginx.conf /etc/nginx/nginx.conf
RUN chmod 777 /usr/share/nginx/html


