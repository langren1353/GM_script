# sh
imageName=gm-script-api
docker buildx build --builder mybuilder --platform=linux/amd64,linux/arm64 \
    --tag docker.suzuran.vip/langren1353/$imageName --push \
    -f "./ac-baidu/fastapi/Dockerfile" "./ac-baidu/fastapi/"
