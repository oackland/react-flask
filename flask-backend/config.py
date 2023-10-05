import os
import sys
from dotenv import load_dotenv

load_dotenv()


class Config:
	SECRET_KEY = os.getenv("SECRET_KEY")
	FLASK_APP = os.getenv("FLASK_APP")
	FLASK_DEBUG = os.getenv("FLASK_DEBUG")
	FLASK_ENV = os.getenv("FLASK_ENV")
	JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")

	if not all([os.getenv('DB_USER'), os.getenv('DB_PASSWORD'), os.getenv('DB_HOST'), os.getenv('DB_PORT'),
				os.getenv('DB_NAME')]):
		sys.exit("One or more database configuration environment variables are missing!")

	SQLALCHEMY_DATABASE_URI = (
			f"postgresql://{os.getenv('DB_USER')}:{os.getenv('DB_PASSWORD')}@"
			f"{os.getenv('DB_HOST')}:{os.getenv('DB_PORT')}/{os.getenv('DB_NAME')}"
	)
	SQLALCHEMY_TRACK_MODIFICATIONS = False

	API_KEY = os.getenv("API_KEY")
	API_SECRET = os.getenv("API_SECRET")

	if not all([os.getenv('RECAPTCHA_SECRET_KEY'), os.getenv('RECAPTCHA_SECRET_KEY')]):
		sys.exit("RECAPTCHA_SECRET_KEY is missing!")

	RECAPTCHA_SECRET_KEY = os.getenv('RECAPTCHA_SECRET_KEY')
	CHATGPT_API_KEY = os.getenv("CHATGPT_API_KEY")
