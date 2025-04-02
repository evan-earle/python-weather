const FiveDay = ({ forecast }) => {
  const dayOne = forecast.list[8];
  const dayTwo = forecast.list[16];
  const dayThree = forecast.list[24];
  const dayFour = forecast.list[32];
  const dayFive = forecast.list[39];

  // Helper function to format date to "Apr 3"
  const formatDate = (date) => {
    const options = { month: "short", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  return (
    <div className="bg-gray-700 p-6 rounded-2xl shadow-lg mx-auto w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold text-white text-center mb-4">
        5 Day Forecast
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {[dayOne, dayTwo, dayThree, dayFour, dayFive].map((day, index) => (
          <div
            key={index}
            className="bg-gray-600 p-4 rounded-lg text-center text-white"
          >
            <div className="text-lg font-semibold">
              {formatDate(day.dt_txt)}
            </div>
            <div className="mt-4 text-xl font-bold">
              {Math.round(day.main.temp)}
            </div>

            <div>
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt=""
              />
            </div>
            <div className="text-sm mt-2">{day.weather[0].main}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiveDay;
