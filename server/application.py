from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route('/')
def index():
    '''Index page route'''
    print(os.environ)
    return render_template("index.html", items=os.environ)