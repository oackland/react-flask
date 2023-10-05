import requests
from flask_login import login_required
from flask_jwt_extended import get_jwt_identity
from app.models import db, User, Quote, Note
from flask import current_app as app, render_template
from config import Config
from . import api
from flask_jwt_extended import create_access_token, get_current_user, jwt_required
from flask import request, jsonify, app
from werkzeug.security import generate_password_hash, check_password_hash


@api.route('/register', methods=['POST'])
def register():
	try:
		data = request.get_json()

		if not data:
			return jsonify({'error': 'Invalid input'}), 400

		username = data.get('username')
		email = data.get('email')
		password = data.get('password')
		first_name = data.get('first_name')
		last_name = data.get('last_name')
		member_type = data.get('member_type')  # Added member_type

		if not all([username, email, password, first_name, last_name, member_type]):
			return jsonify({'error': 'All fields are required'}), 400

		# Additional validations for username and email can be added here

		if User.query.filter_by(username=username).first():
			return jsonify({'error': 'Username already exists'}), 400

		if User.query.filter_by(email=email).first():
			return jsonify({'error': 'Email already exists'}), 400

		hashed_password = generate_password_hash(password)  # Consider configuring the method and options
		new_user = User(username=username, email=email, first_name=first_name, last_name=last_name,
						member_type=member_type,
						hashed_password=hashed_password)

		db.session.add(new_user)
		db.session.commit()
		return jsonify({'message': 'User has been created!'}), 201
	except Exception as e:
		db.session.rollback()
		app.logger.error(f"Error while creating user: {str(e)}")
		return jsonify({'error': 'Could not register user'}), 500
	finally:
		db.session.close()


#
# @api.route('/login', methods=['POST'])
# def login():
# 	data = request.get_json()
# 	if not data:
# 		return jsonify({'error': 'Invalid input'}), 400
#
# 	username = data.get('username')
# 	password = data.get('password')
#
# 	user = User.query.filter_by(username=username).first()
# 	if not user or not user.check_password(password):
# 		return jsonify({'error': 'Invalid credentials'}), 401
#
# 	try:
# 		access_token = create_access_token(identity={'username': username})
# 		return jsonify({'token': access_token}), 200
# 	except Exception as e:
# 		app.logger.error(f'Error creating access token: {str(e)}')
# 		return jsonify({'error': 'Could not log in'}), 500
#

# @api.route('/')
# def home():
# 	return jsonify({'message': 'Home'})
#


@api.route('/submit', methods=['POST'])
def submit():
	data = request.get_json()
	if not data:
		return jsonify({'error': 'Invalid input'}), 400

	recaptcha_value = data.get('recaptchaValue')
	email = data.get('email')
	password = data.get('password')

	recaptcha_secret_key = Config.RECAPTCHA_SECRET_KEY
	recaptcha_verification_url = 'https://www.google.com/recaptcha/api/siteverify'

	recaptcha_response = requests.post(recaptcha_verification_url,
									   data={'secret': recaptcha_secret_key, 'response': recaptcha_value})
	recaptcha_data = recaptcha_response.json()

	if not recaptcha_data.get('success', False):
		return jsonify({'error': 'reCAPTCHA verification failed'}), 400

	return jsonify({'email': email, 'password': password})


@api.route('/quotes', methods=['POST'])
def save_quote():
	try:
		data = request.get_json()
		if not data:
			return jsonify({'error': 'Invalid input'}), 400

		quote_text = data['text']
		user_id = data['user_id']
		new_quote = Quote(text=quote_text, user_id=user_id)
		db.session.add(new_quote)
		db.session.commit()
		return jsonify({'message': 'Quote saved successfully!'}), 201
	except Exception as e:
		return jsonify({'error': str(e)}), 500


@api.route('/emailcheck', methods=['POST'])
def EmailCheck():
	data = request.get_json()
	email = data.get('email')
	if not email:
		return jsonify({'error': 'Email is required'}), 400

	user = User.query.filter_by(email=email).first()
	if user:
		return jsonify({'message': 'Email exists'})
	else:
		return jsonify({'message': 'No email exists'}), 404


@api.route('/login', methods=['POST'])
def login():
	data = request.get_json()
	email = data.get('email')
	password = data.get('password')

	queried_user = User.query.filter_by(username=data.get('username')).first()

	if queried_user and check_password_hash(queried_user.password, password):
		print('worked.')

	if not email or not password:
		return jsonify({'error': 'Email and Password are required'}), 400

	user = User.query.filter_by(email=email).first()

	if not user or not user.check_password(password):  # Using user.check_password method here
		return jsonify({'error': 'Invalid Email or Password'}), 401

	token = create_access_token(identity=email)
	return jsonify({'token': token})


@api.route("/")
def hello_world():
	return render_template('index.html')


@api.route('/user/<int:user_id>', methods=['GET'])
def get_user(user_id):
	user = User.query.get(user_id)
	if not user:
		return jsonify({'error': 'User not found'}), 404

	return jsonify({
			'id':          user.id,
			'username':    user.username,
			'email':       user.email,
			'first_name':  user.first_name,
			'last_name':   user.last_name,
			'member_type': user.member_type
	})


@api.route('/current_user', methods=['GET'])
@jwt_required()
def current_user():
	user = get_current_user()
	if not user:
		return jsonify({'error': 'User not authenticated'}), 401
	return jsonify({
			'id':          user.id,
			'username':    user.username,
			'email':       user.email,
			'first_name':  user.first_name,
			'last_name':   user.last_name,
			'member_type': user.member_type
	})


@api.route('/notes', methods=['POST'])
@login_required
def create_note():
	data = request.json
	note = Note(
		title=data['title'],
		content=data['content'],
		Frequence=data.get('Frequence', None),  # Optional attributes use .get
		value=data.get('value', None),
		user=current_user
	)
	db.session.add(note)
	db.session.commit()

	return jsonify({'message': 'Note created successfully!', 'note_id': note.id}), 201


@api.route('/notes/<int:note_id>', methods=['PUT'])
@login_required
def update_note(note_id):
	note = Note.query.get(note_id)

	if not note or note.user != current_user:
		return jsonify({'error': 'Note not found or unauthorized'}), 404

	data = request.json
	note.title = data['title']
	note.content = data['content']
	note.Frequence = data.get('Frequence', note.Frequence)
	note.value = data.get('value', note.value)

	db.session.commit()

	return jsonify({'message': 'Note updated successfully!'})


@api.route('/notes/<int:note_id>', methods=['DELETE'])
@login_required
def delete_note(note_id):
	note = Note.query.get(note_id)

	if not note or note.user != current_user:
		return jsonify({'error': 'Note not found or unauthorized'}), 404

	db.session.delete(note)
	db.session.commit()

	return jsonify({'message': 'Note deleted successfully!'})
