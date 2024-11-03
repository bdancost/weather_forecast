/* eslint-disable react/prop-types */
import "./WeatherInformations.css";

function WeatherInformations({ weather }) {
  // Verifica se os dados estão disponíveis antes de renderizar
  if (!weather || !weather.weather || !weather.weather[0] || !weather.main) {
    return null; // Retorna nada enquanto os dados não estão carregados
  }

  return (
    <div className="weather-container">
      <h2>{weather.name}</h2>
      <div className="weather-info">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        />
        <p className="temperature">{Math.round(weather.main.temp)}&deg;C</p>
      </div>

      <p className="description">{weather.weather[0].description}</p>

      <div className="details">
        <p>Sensação térmica: {Math.round(weather.main.feels_like)}&deg;C</p>
        <p>Umidade: {weather.main.humidity}%</p>
        <p>Pressão: {weather.main.pressure}</p>
      </div>
    </div>
  );
}

export default WeatherInformations;
