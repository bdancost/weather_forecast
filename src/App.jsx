import { useState, useRef } from "react";
import axios from "axios";
import "./App.css";
import WeatherInformations from "./components/WeatherInformations/WeatherInformations";

function App() {
  const [weather, setWeather] = useState({});
  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;
    const key = "12ecf597f3b89da9a2ddd8c610c2ed1d";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const apiInfo = await axios.get(url);
    setWeather(apiInfo.data);
  }
  return (
    <div>
      <h1>Weather Forecast</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
      <button onClick={searchCity}>Buscar</button>

      <WeatherInformations weather={weather} />
    </div>
  );
}

export default App;
