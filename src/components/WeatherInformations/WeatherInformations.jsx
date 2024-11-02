/* eslint-disable react/prop-types */
function WeatherInformations({ weather }) {
  // Verifica se os dados estão disponíveis antes de renderizar
  if (!weather || !weather.weather || !weather.weather[0] || !weather.main) {
    return null; // Retorna nada enquanto os dados não estão carregados
  }

  return (
    <div>
      <h2>{weather.name}</h2>
      <div>
        <img
          src={`https://openweather.org/img/wn/${weather.weather[0].icon}@2x.png`}
        />
      </div>
      <p>{Math.round(weather.main.temp)}&deg;C</p>
    </div>
  );
}

export default WeatherInformations;
