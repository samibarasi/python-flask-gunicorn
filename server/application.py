from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route('/')
def index():
    '''Index page route'''
    return render_template("index.html", items=os.environ)