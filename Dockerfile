FROM ubuntu:latest
LABEL authors="Administrator"

ENTRYPOINT ["top", "-b"]
