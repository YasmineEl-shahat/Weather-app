import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";

import { RootState } from "./redux/store";
import { fetchWeather } from "./apis/weatherApi";
import { WeatherData } from "./interfaces/WeatherData";

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const theme = useSelector((state: RootState) => state.theme.theme);

  const handleFetchWeather = async (city: string) => {
    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
      setError(null);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data.message || "City not found");
      } else {
        setError("An unexpected error occurred");
      }
      setWeatherData(null);
    }
  };

  return (
    <div
      className={`app min-h-screen transition-colors ${
        theme === "light"
          ? "text-gray-800 bg-gray-100"
          : "text-white bg-gray-900"
      }`}
    >
      <Header onSearch={handleFetchWeather} />

      <div className="flex flex-col items-center p-4">
        {error && <ErrorMessage message={error} />}
        {weatherData && <WeatherCard weatherData={weatherData} />}
      </div>
    </div>
  );
};

export default App;
