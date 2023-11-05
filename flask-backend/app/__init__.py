from flask import Flask, jsonify
from flask_login import LoginManager
from flask_migrate import Migrate
from flask_cors import CORS
from config import Config
from .models import User, db
from flask_jwt_extended import JWTManager

login_manager = LoginManager()


def create_app():
	app = Flask(__name__)

	app.config.from_object(Config)

	CORS(app, resources={r"/api/*": {"origins": "*"}})

	db.init_app(app)
	migrate = Migrate(app, db)
	login_manager.init_app(app)

	# Initialize extensions

	JWTManager(app)

	with app.app_context():
		db.create_all()

	from app.blueprints.routes import api
	app.register_blueprint(api, url_prefix='/api')

	# Configure login manager
	login_manager.login_view = "api.login"
	login_manager.login_message_category = "danger"

	@login_manager.user_loader
	def load_user(user_id):
		return User.get(user_id)  # Assuming your user_id is an integer

	@login_manager.unauthorized_handler
	def unauthorized():
		return jsonify({"error": "You must be logged in to access this resource."}), 401

	return app


from . import models
