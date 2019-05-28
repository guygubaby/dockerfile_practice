# build
FROM node:11-alpine AS builder
WORKDIR /src
COPY . .
RUN npm config set registry https://registry.npm.taobao.org && \
  npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass && \
  npm i && \
  npm run build
# deploy
FROM nginx:1.14-alpine
COPY nginx.conf /etc/nginx/
COPY --from=builder /src/dist /usr/src/app
EXPOSE 80