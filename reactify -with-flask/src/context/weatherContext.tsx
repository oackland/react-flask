// WeatherContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";

interface WeatherData {
  weather: string;
  pressure_in_bar: number;
  temperature_celsius: number;
  temperature_fahrenheit: number;
  icon: string;
  wind: number;
  sunset: number | undefined;
  sunrise: number | undefined;
  temp_high_for_day: number;
  temp_low_for_day: number;
}

interface WeatherContextType {
  weatherData: WeatherData | null;
  loading: boolean;
  error: string | null;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

interface WeatherProviderProps {
  children: ReactNode;
}

export const WeatherProvider: React.FC<WeatherProviderProps> = ({
  children,
}) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/weather");
        setWeatherData(response.data);
      } catch (err) {
        setError("Error, Server is down.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <WeatherContext.Provider value={{ weatherData, loading, error }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = (): WeatherContextType => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
};
// <div>
//     <h1>Weather Information</h1>
//     <p>Weather: {weatherData?.weather}</p>
//     <p>Pressure: {weatherData?.pressure_in_bar} hPa</p>
//     <p>Temperature: {weatherData?.temperature_celsius}°C / {weatherData?.temperature_fahrenheit}°F</p>
//     <p>Wind Speed: {weatherData?.wind} m/s</p>
//     <p>Sunrise: {new Date(weatherData?.sunrise! * 1000).toLocaleTimeString()}</p>
//     <p>Sunset: {new Date(weatherData?.sunset! * 1000).toLocaleTimeString()}</p>
//     <p>High for the day: {weatherData?.temp_high_for_day}°C</p>
//     <p>Low for the day: {weatherData?.temp_low_for_day}°C</p>
//     <img src={`http://openweathermap.org/img/w/${weatherData?.icon}.png`} alt="Weather Icon"/>
// </div>
