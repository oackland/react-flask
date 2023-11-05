import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../public/css/Weather.css";

interface WeatherInfo {
  temp: number;
  humidity: number;
  pressure: number;
  weatherType: string;
  name: string;
  speed: number;
  country: string;
  sunset: number;
}

const WeatherComponent: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://api.openweathermap.org/data/2.5/weather?q=utah&units=metric&appid=38d147031dc4e997fc0b84ac609f3f86",
        );
        const data = response.data;

        const formattedData: WeatherInfo = {
          temp: data.main.temp,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          weatherType: data.weather[0].description,
          name: data.name,
          speed: data.wind.speed,
          country: data.sys.country,
          sunset: data.sys.sunset,
        };

        setWeatherData(formattedData);
      } catch (err) {
        setError("Failed to fetch data. Please try again.");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {weatherData ? (
        <div className={"container-weather"}>
          <h1>
            Weather in {weatherData.name}, {weatherData.country}
          </h1>
          <p>Temperature: {weatherData.temp}°C</p>
          <p>Weather: {weatherData.weatherType}</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Pressure: {weatherData.pressure} hPa</p>
          <p>Wind Speed: {weatherData.speed} m/s</p>
          <p>
            Sunset Time:{" "}
            {new Date(weatherData.sunset * 1000).toLocaleTimeString()}
          </p>
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherComponent;
