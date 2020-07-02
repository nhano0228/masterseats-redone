from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_session import Session
from flask_bootstrap import Bootstrap
from sqlalchemy import *
from sqlalchemy.orm import scoped_session, sessionmaker

#Bug tracking software
import sentry_sdk
from sentry_sdk.integrations.flask import FlaskIntegration

sentry_sdk.init(
    dsn="https://d5eff74970e142a89274f1fb56163ebc@o396134.ingest.sentry.io/5249067",
    integrations=[FlaskIntegration()]
)

app = Flask(__name__)

app.config.from_pyfile('config.py')

db = SQLAlchemy(app)
from routes_exchange import *

Session(app)
from routes_login import *

Bootstrap(app)

from routes_braintree import *

from routes_email import *



'''Home page'''
@app.route("/", methods = ["POST", "GET"])
def index():
    return render_template("index.html")

@app.errorhandler(AssertionError)
def assertion_error(e):
    return "<h1> ERROR CODE 0: Sorry! We can't load the website. Please let the TicketChange team know and we'll have it fixed soon</h1>", 500
