/* eslint-disable react/prop-types */
import "./WeatherInformations5Days.css";

function WeatherInformations5Days({ weather5Days }) {
  console.log(weather5Days);

  return (
    <div className="weather-container">
      <p>5 days</p>
    </div>
  );
}

export default WeatherInformations5Days;
