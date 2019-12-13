from flask import Flask,jsonify
from os import environ
import config
from utils.db import mongo

app = Flask(__name__)

mode = environ.get('MODE', None)
host = config.db_uri
port = config.db_port

if mode == 'production':
    host = config.db_prod_uri
    port = config.db_prod_port

MONGO_URI = f'mongodb://{host}:{port}/firmware'
print('MONGO_URI', MONGO_URI)

app.config["MONGO_URI"] = MONGO_URI
mongo.init_app(app)



@app.route('/')
def ping():
    return jsonify({'code':0,'res':'pong'})


if __name__ == '__main__':
    app.run()
