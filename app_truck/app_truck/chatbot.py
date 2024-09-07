import requests
import re
import math
import json
from nltk.tokenize import word_tokenize

# Load mechanics and drivers data from a JSON file
with open('service_data.json', 'r') as file:
    data = json.load(file)

mechanics = data['mechanics']
drivers = data['drivers']

def haversine(coord1, coord2):
    R = 6371  # Radius of the Earth in kilometers
    
    lat1, lon1 = coord1
    lat2, lon2 = coord2
    
    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)
    
    a = math.sin(dlat / 2) ** 2 + math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) * math.sin(dlon / 2) ** 2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    
    distance = R * c
    return distance

def get_full_map_url(shortened_url):
    try:
        response = requests.head(shortened_url, allow_redirects=True, timeout=10)
        return response.url
    except requests.RequestException as e:
        print(f"Error fetching the full URL: {e}")
        return None

def extract_coordinates_from_url(full_url):
    google_pattern = r"@(-?\d+\.\d+),(-?\d+\.\d+)"
    apple_pattern = r"\?ll=(-?\d+\.\d+),(-?\d+\.\d+)"
    
    google_match = re.search(google_pattern, full_url)
    apple_match = re.search(apple_pattern, full_url)
    
    if google_match:
        lat, lon = google_match.groups()
        return float(lat), float(lon)
    elif apple_match:
        lat, lon = apple_match.groups()
        return float(lat), float(lon)
    else:
        print("Coordinates not found in the URL.")
        return None

def extract_coordinates(map_url):
    if "maps.app.goo.gl" in map_url or "goo.gl/maps" in map_url:
        full_url = get_full_map_url(map_url)
        if not full_url:
            return None
        return extract_coordinates_from_url(full_url)
    else:
        return extract_coordinates_from_url(map_url)

def find_nearest_service(location, service_providers):
    nearest_provider = None
    min_distance = float('inf')
    
    for provider in service_providers:
        provider_coordinates = extract_coordinates(provider['location'])
        if provider_coordinates:
            distance = haversine(location, provider_coordinates)
            if distance < min_distance:
                min_distance = distance
                nearest_provider = provider
    
    return nearest_provider

def get_response(user_input):
    user_input = user_input.lower()
    tokens = word_tokenize(user_input)

    if "hello" in tokens or "hi" in tokens:
        return "Hello! How can I assist you today? Do you need a mechanic or a truck driver?"
    elif "mechanic" in tokens or "i need a mechanic" in tokens:
        return "Please share your location."
    elif "driver" in tokens or "i need towing" in tokens or "i need a truck driver" in tokens:
        return "Please share your location."
    elif any(re.match(pattern, user_input) for pattern in MAP_LINK_PATTERNS):
        coordinates = extract_coordinates(user_input)
        if coordinates:
            service_type = "mechanic" if "mechanic" in tokens else "driver"
            services = mechanics if service_type == "mechanic" else drivers
            nearest = find_nearest_service(coordinates, services)
            if nearest:
                return f"Nearest {service_type}: {nearest['name']}, Phone: {nearest['phone']}"
            else:
                return "No services available in your area."
        else:
            return "Invalid map URL or unable to extract coordinates."
    else:
        return "I'm not sure how to help with that. Can you please elaborate?"

# Map link patterns
MAP_LINK_PATTERNS = [
    r"https?://(www\.)?google\.[a-z]+/maps",
    r"https?://(www\.)?apple\.[a-z]+/maps",
]
