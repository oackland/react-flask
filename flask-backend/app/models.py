from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

db = SQLAlchemy()

username = {}
localstorage = {}


class User(db.Model, UserMixin):
	__tablename__ = 'user'
	__table_args__ = {'schema': 'public'}
	id = db.Column(db.Integer, primary_key=True)
	username = db.Column(db.String(80), unique=True, nullable=False)
	email = db.Column(db.String(120), unique=True, nullable=False)
	first_name = db.Column(db.String(120), nullable=False)
	last_name = db.Column(db.String(120), nullable=False)
	member_type = db.Column(db.String(120), nullable=False)
	hashed_password = db.Column(db.String(500), nullable=False)

	def set_password(self, password):
		self.hashed_password = generate_password_hash(password)

	def check_password(self, password):
		return check_password_hash(self.hashed_password, password)

	def __repr__(self):
		return f'<User {self.username}>'


class Quote(db.Model):
	__tablename__ = 'quote'
	__table_args__ = {'schema': 'public'}  # This is the issue
	id = db.Column(db.Integer, primary_key=True)
	text = db.Column(db.String(500), nullable=False)
	user_id = db.Column(db.Integer, db.ForeignKey('public.user.id'), nullable=False)
	user = db.relationship('User', backref='quotes')

	def __init__(self, text, user_id):
		self.text = text
		self.user_id = user_id


class Note(db.Model):
	__tablename__ = 'note'
	__table_args__ = {'schema': 'public'}
	id = db.Column(db.Integer, primary_key=True)
	title = db.Column(db.String(255), nullable=False)
	content = db.Column(db.Text, nullable=False)
	Frequence = db.Column(db.String(255), nullable=True)  # assuming you are saving a comma-separated string
	value = db.Column(db.Integer, nullable=True)
	completed = db.Column(db.Boolean, default=False)

	# Foreign Key to relate Notes with Users
	user_id = db.Column(db.Integer, ForeignKey('public.user.id'))
	user = relationship("User", back_populates="notes")  # Establishing the relationship


User.notes = relationship("Note", order_by=Note.id, back_populates="user")
