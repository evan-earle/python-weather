import axios from "axios";
import { useState } from "react";
import Current from "./Current";
import FiveDay from "./FiveDay";
import SyncLoader from "react-spinners/SyncLoader";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAPI = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8080/api/weather?city=${city}`
      );

      setWeather(response.data);
      setError(null);
      setLoading(false);
    } catch (err) {
      setError("City not found. Try again.");
      setWeather(null);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-1/2 mx-auto items-center p-6 rounded-2xl shadow-lg  gap-5 bg-gray-800 text-white">
      <h1 className="flex justify-center text-2xl">
        Python/React&nbsp;{" "}
        <span className="text-blue-400">Weather App (°C)</span>
      </h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full text-center p-2 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={fetchAPI}
        className="w-1/2 mt-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Get Weather
      </button>

      {error && <p className="text-red-400 mt-3">{error}</p>}

      {loading ? (
        <div className="flex justify-center mt-3">
          <SyncLoader color="#155dfc" size={10} />
        </div>
      ) : (
        weather && (
          <>
            <Current weather={weather.current} />
            <FiveDay forecast={weather.forecast} />
          </>
        )
      )}
    </div>
  );
};

export default Weather;
