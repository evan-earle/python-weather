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
FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast"

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
    
    current_response = requests.get(BASE_URL, params=params)
    forecast_response = requests.get(FORECAST_URL, params=params)
    
    if current_response.status_code == 200 and forecast_response.status_code == 200:
        return jsonify({
            "current": current_response.json(),
            "forecast": forecast_response.json()
        })
    
    else:
        return jsonify({"error": "City not found or API request failed."}), 400

if __name__ == '__main__':
    app.run(debug=True, port=8080)
