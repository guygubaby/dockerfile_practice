FROM alpine:latest
MAINTAINER 1907004005@qq.com
RUN apk update \
    && apk add --no-cache bash
COPY go_server /usr/bin/
ENTRYPOINT ["go_server"]