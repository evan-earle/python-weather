import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchAPI = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/weather?city=${city}`
      );
      console.log(response.data);

      setWeather(response.data);
      setError(null);
    } catch (err) {
      setError("City not found or API request failed.");
      setWeather(null);
    }
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchAPI}>Get Weather</button>

      {error && <p className="error">{error}</p>}
      {weather && (
        <div className="weather-info">
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Description: {weather.description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
