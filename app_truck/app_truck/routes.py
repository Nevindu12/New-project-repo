import re
from flask import request, jsonify
from models import app

MAP_LINK_PATTERNS = [
    r"https?://(www\.)?google\.[a-z]+/maps",
    r"https?://(www\.)?apple\.[a-z]+/maps",
]

mechanics = [
    {"name": "Mechanic John Doe", "phone": "987654321", "location": "Colombo"},
    {"name": "Mechanic Jane Smith", "phone": "987654322", "location": "Galle"},
    {"name": "Mechanic Mike Johnson", "phone": "987654323", "location": "Kandy"},
    {"name": "Mechanic Emily Davis", "phone": "987654324", "location": "Jaffna"},
]

drivers = [
    {"name": "Driver John Doe", "phone": "123456789", "location": "Colombo"},
    {"name": "Driver Jane Smith", "phone": "123456788", "location": "Galle"},
    {"name": "Driver Mike Johnson", "phone": "123456787", "location": "Kandy"},
    {"name": "Driver Emily Davis", "phone": "123456786", "location": "Jaffna"},
]

def is_map_link(url):
    return any(re.match(pattern, url) for pattern in MAP_LINK_PATTERNS)

@app.route('/webhook', methods=['POST'])
def webhook():
    req = request.get_json(silent=True, force=True)
    intent = req.get('queryResult').get('intent').get('displayName')

    if intent == 'Request Service':
        service_type = req.get('queryResult').get('parameters').get('service_type')
        location = req.get('queryResult').get('parameters').get('location')

        if is_map_link(location):
            print("Map link detected:", location)
            service_details = find_nearest_service(location, service_type)
            return jsonify({
                'fulfillmentText': f"We have found a {service_type} for you! Here are the details: {service_details}"
            })

        return jsonify({
            'fulfillmentText': 'Could not detect a valid map link. Please provide a proper Google or Apple map link.'
        })

    return jsonify({'fulfillmentText': 'Something went wrong!'})

def find_nearest_service(location_link, service_type):
    # Simulate finding the nearest service without using actual map API
    if service_type.lower() == "mechanic":
        return mechanics[0]  # Return the first mechanic for now
    else:
        return drivers[0]  # Return the first driver for now
