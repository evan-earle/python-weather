const Current = ({ weather }) => {
  return (
    <div className="bg-gray-700 p-6 rounded-2xl shadow-lg w-full text-center mt-10">
      <h2 className="text-3xl font-bold text-white text-center">
        {weather.name}, {weather.sys.country}
      </h2>
      <p className="text-sm">current weather</p>

      <p className="text-lg text-gray-300 mt-2">
        Current:{" "}
        <span className="font-semibold">{Math.round(weather.main.temp)}°C</span>
      </p>
      <p className="text-lg text-gray-300">
        Feels like:{" "}
        <span className="font-semibold">
          {Math.round(weather.main.feels_like)}°C
        </span>
      </p>
      <p className="text-lg text-gray-300">
        High:{" "}
        <span className="font-semibold">
          {Math.round(weather.main.temp_max)}°C
        </span>
      </p>
      <p className="text-lg text-gray-300">
        Low:{" "}
        <span className="font-semibold">
          {Math.round(weather.main.temp_min)}°C
        </span>
      </p>
      <p className="text-xl font-medium text-blue-400 mt-4">
        {weather.weather[0].main}
      </p>
    </div>
  );
};

export default Current;
