# import requests
# from app.models import db, User, Quote
from flask import current_app as app, render_template, app, Flask
from . import User
from . import create_app
from .models import username

app = Flask(__name__)


@app.get("/username/<string:user_id>")
def get_user(user_id):
	try:
		return username[user_id]
	except KeyError:
		return {"message": "Username not found"}, 404
