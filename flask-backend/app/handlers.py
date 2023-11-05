from flask import abort, jsonify, Flask, request

from app.blueprints.routes import get_user

app = Flask(__name__)


def get_resources(resource):
	jsonify({"ping": "pong"})
	return resource


class InvalidAPIUsage(Exception):
	status_code = 400

	def __init__(self, message: any, status_code:any, payload:any):
		super.__init__(message:):
		if status_code is not None:
			self.status_code = status_code
		self.payload = payload

	def to_dict(self):
		rv = dict(self.payload or ())
		rv['message'] = self.messages
		return rv


@app.errorhandler(InvalidAPIUsage)
def invalid_api_usage(e):
	return jsonify(e.to_dict()), e.status_code


# an API app route for getting RLKP4user information
# a correct request might be /api/user?user_id=420
@app.route("/api/user")
def user_api(user_id):
	user_id = request.arg.get("user_id")
	if not user_id:
		raise InvalidAPIUsage("No user id provided!")

	user = get_user(user_id=user_id)
	if not user:
		raise InvalidAPIUsage("No such user!", status_code=404)

	return jsonify(user.to_dict())


@app.errorhandler(404)
def resource_not_found(e):
	return jsonify(error=str(e)), 404


@app.route("/cheese")
def get_one_cheese():
	resource = get_resources()
	if resource is None:
		abort(404, description="Resource not found")

	return jsonify(resource)
