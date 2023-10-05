from app import create_app


app = create_app()  # Assuming create_app is your app factory function

if __name__ == '__main__':
	app.run(debug=True, port=5000, host='0.0.0.0')
