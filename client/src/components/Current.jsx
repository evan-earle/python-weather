const Current = ({ weather }) => {
  return (
    <div className="flex flex-col items-center bg-gray-700 p-6 rounded-2xl shadow-lg w-full text-center mt-10">
      <h2 className="text-3xl font-bold text-white text-center">
        {weather.name}, {weather.sys.country}
      </h2>
      <p className="text-sm">current weather</p>

      <p className="text-4xl text-blue-400 mt-6 font-semibold ">
        {Math.round(weather.main.temp)}
      </p>

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt=""
      />

      <p className="text-xl font-medium text-blue-400 mb-8">
        {weather.weather[0].main}
      </p>
      <p className="text-lg text-gray-300">
        Feels like:{" "}
        <span className="font-semibold">
          {Math.round(weather.main.feels_like)}
        </span>
      </p>
      <p className="text-lg text-gray-300">
        High:{" "}
        <span className="font-semibold">
          {Math.round(weather.main.temp_max)}
        </span>
      </p>
      <p className="text-lg text-gray-300">
        Low:{" "}
        <span className="font-semibold">
          {Math.round(weather.main.temp_min)}
        </span>
      </p>
    </div>
  );
};

export default Current;
