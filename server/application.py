from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route('/')
def index():
    '''Index page route'''
    return "<h1>Application Deployed!</h1>"

@app.route('/info')
def info():
    '''Info page route'''
    return render_template("info.html", items=os.environ, headline="Info")