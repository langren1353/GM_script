# sh
imageName=gm-script
docker buildx build --builder mybuilder --platform=linux/amd64,linux/arm64 \
    --tag langren1353/$imageName --push \
    -f "./ac-baidu/doc/Dockerfile" .
