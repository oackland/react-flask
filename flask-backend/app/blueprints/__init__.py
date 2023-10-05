from flask import Flask, Blueprint

from app import login_manager

app = Flask(__name__)
login_manager.init_app(app)

api = Blueprint('api', __name__, template_folder='apiTemplates')
