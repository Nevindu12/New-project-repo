# Friendly Truck Driver Chatbot Setup Guide

## Prerequisites

1. **Python**: Ensure Python 3.7+ is installed on your system.
2. **MongoDB Atlas**: Set up a MongoDB Atlas account and create a cluster. Obtain your connection string.

## Setup Instructions

### 1. Extract the Project

Extract the zip file to your desired location.

### 2. Install Required Python Packages

Open a terminal or command prompt and navigate to the project directory.

```sh
cd path_to_extracted_folder
pip install -r requirements.txt



app.config["MONGO_URI"] = "your_mongodb_connection_string"


run: 
python app.py


test code :

curl -X POST http://127.0.0.1:5000/webhook -H "Content-Type: application/json" -d '{
    "queryResult": {
        "intent": {"displayName": "Request Towing Service"},
        "parameters": {
            "location": "https://maps.google.com/?q=37.7749,-122.4194",
            "vehicle_type": "car"
        }
    }
}'



install :

### Additional Files

#### `requirements.txt`

```txt
Flask==2.1.2
Flask-PyMongo==2.3.0
Flask-Bcrypt==0.7.1
Flask-JWT-Extended==4.3.1


pip install geopy
