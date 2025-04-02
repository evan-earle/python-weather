from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os
from dotenv import load_dotenv

# Load API key from .env file
load_dotenv()
API_KEY = os.getenv("OPENWEATHER_API_KEY")

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend requests

BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

@app.route('/api/weather', methods=['GET'])
def get_weather():
    city = request.args.get('city')  # Get city from query parameters
    if not city:
        return jsonify({"error": "City parameter is required"}), 400
    
    params = {
        "q": city,
        "appid": API_KEY,
        "units": "metric"  # Use "imperial" for Fahrenheit
    }
    
    response = requests.get(BASE_URL, params=params)
    
    if response.status_code == 200:
        data = response.json()
        return jsonify(data)
       
    else:
        return jsonify({"error": "City not found or API request failed."}), response.status_code

if __name__ == '__main__':
    app.run(debug=True, port=8080)
