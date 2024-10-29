# sh

echo "这个就是linux下运行的"

cd ./ac-baidu/doc/ && npm run docs:build && cd -
./ac-baidu/doc/rebuild.sh
./ac-baidu/fastapi/rebuild.sh

echo '完事之后，docker compose更新即可'
