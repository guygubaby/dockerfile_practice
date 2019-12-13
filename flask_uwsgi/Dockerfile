FROM tiangolo/uwsgi-nginx-flask:python3.7-alpine3.8
ENV UWSGI_INI uwsgi.ini
ENV MODE production
WORKDIR /flask-app
COPY requirements.txt /
RUN pip install --no-cache-dir -U pip -i https://pypi.tuna.tsinghua.edu.cn/simple \
    && pip install --no-cache-dir -r /requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple \
    && apk add --no-cache curl
COPY . .
