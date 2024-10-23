// src/WeatherForecast.jsx
import WeatherIcon from './WeatherIcon';
import WeatherData from './WeatherData';
import './WeatherForecast.css';

function WeatherForecast({ day, img, imgAlt, conditions, time }) {
  return (
    <div className="weather">
      <h2>{day}</h2> {/* Render the day of the week here */}
      <WeatherIcon img={img} imgAlt={imgAlt} />
      <WeatherData conditions={conditions} time={time} />
    </div>
  );
}

export default WeatherForecast;
