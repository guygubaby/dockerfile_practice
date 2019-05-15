FROM keymetrics/pm2:latest-alpine
WORKDIR /src
COPY . .
RUN npm config set registry https://registry.npm.taobao.org \
  && npm i
EXPOSE 3000
ENTRYPOINT ["pm2-runtime","start","pm2.config.json"]