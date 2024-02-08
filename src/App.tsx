import './App.css';
import { useState, useEffect } from 'react';
import { WeatherGrid } from './WeatherGrid';
import { type WeatherData } from './ApiInterface';

function App() {
  const [weather, setWeather] = useState<WeatherData>();

  const fetchWeatherData = async () => {
    await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=b6ce0c4ce6d646c8aaf91548240702&&q=London&days=3`
    )
      .then((res) => res.json()) // parse response as JSON
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);
  return (
    <div className="App">
      {weather && (
        <WeatherGrid
          location={weather.location}
          current={weather.current}
          forecast={weather.forecast}
        />
      )}
    </div>
  );
}

export default App;
