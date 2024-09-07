from flask import Flask
from flask_pymongo import PyMongo
from flask_bcrypt import Bcrypt

app = Flask(__name__)
app.config.from_object('config.Config')

mongo = PyMongo(app)
bcrypt = Bcrypt(app)




# from flask import Flask
# from flask_pymongo import PyMongo
# from flask_bcrypt import Bcrypt
# from flask_jwt_extended import JWTManager

# app = Flask(__name__)

# app.config["MONGO_URI"] = "your_mongodb_connection_string"
# mongo = PyMongo(app)
# bcrypt = Bcrypt(app)
# jwt = JWTManager(app)

# @app.route('/register_driver', methods=['POST'])
# def register_driver():
#     data = request.get_json()
#     password_hash = bcrypt.generate_password_hash(data['password']).decode('utf-8')
#     mongo.db.drivers.insert_one({
#         'username': data['username'],
#         'email': data['email'],
#         'password': password_hash
#     })
#     return jsonify(message="Driver registered successfully"), 201

# @app.route('/register_customer', methods=['POST'])
# def register_customer():
#     data = request.get_json()
#     password_hash = bcrypt.generate_password_hash(data['password']).decode('utf-8')
#     mongo.db.customers.insert_one({
#         'username': data['username'],
#         'email': data['email'],
#         'password': password_hash
#     })
#     return jsonify(message="Customer registered successfully"), 201

# @app.route('/login', methods=['POST'])
# def login():
#     data = request.get_json()
#     user = None
#     if 'drivers' in data['role']:
#         user = mongo.db.drivers.find_one({'email': data['email']})
#     elif 'customers' in data['role']:
#         user = mongo.db.customers.find_one({'email': data['email']})
    
#     if user and bcrypt.check_password_hash(user['password'], data['password']):
#         access_token = create_access_token(identity={'username': user['username'], 'role': data['role']})
#         return jsonify(access_token=access_token), 200
#     else:
#         return jsonify(message="Invalid credentials"), 401

# if __name__ == '__main__':
#     app.run(debug=True)
