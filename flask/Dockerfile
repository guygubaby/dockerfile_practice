FROM python:3.6-alpine
RUN echo "https://mirrors.ustc.edu.cn/alpine/v3.9/main/" > /etc/apk/repositories \
  && apk add --upgrade --no-cache \
  && apk add --no-cache gcc musl-dev
WORKDIR /usr/src/app
COPY requirements.txt ./
RUN pip install -r requirements.txt --no-cache-dir -i https://pypi.tuna.tsinghua.edu.cn/simple/
COPY . .
ENTRYPOINT ["gunicorn","app:app","-c","gunicorn.conf.py"]