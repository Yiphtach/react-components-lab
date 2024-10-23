// src/WeatherData.jsx

function WeatherData({ conditions, time }) {
  return (
    <div className="weather-data">
      <p><span>conditions: </span>{conditions}</p>
      <p><span>time: </span>{time}</p>
    </div>
  );
}

export default WeatherData;
