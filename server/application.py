from flask import Flask
import os

app = Flask(__name__)

@app.route('/')
def index():
    '''Index page route'''

    return os.environ