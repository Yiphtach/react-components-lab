// src/WeatherForecast.jsx
import WeatherIcon from './WeatherIcon';
import WeatherData from './WeatherData';
import './WeatherForecast.css';

function WeatherForecast({ day, img, imgAlt, conditions, time }) {
  return (
    <div className="weather">
      <h2>{day}</h2>
      <WeatherIcon img={img} imgAlt={imgAlt} />
      <WeatherData conditions={conditions} time={time} />
    </div>
  );
}

export default WeatherForecast;
