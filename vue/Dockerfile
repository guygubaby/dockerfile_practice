# build
FROM node:11-alpine as builder
WORKDIR /src
COPY . .
RUN npm config set registry https://registry.npm.taobao.org && \
npm i && \
npm run build
# deploy
FROM nginx:1.14-alpine
COPY nginx.conf /etc/nginx/
COPY --from=builder /src/dist /usr/src/app
EXPOSE 80