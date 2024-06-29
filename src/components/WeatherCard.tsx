import React from "react";
import { useSelector } from "react-redux";
import { imgUrl } from "../config";
import { WeatherData } from "../interfaces/WeatherData";
import { RootState } from "../redux/store";

interface WeatherCardProps {
  weatherData: WeatherData | null;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  if (!weatherData) return null;

  const { name, main, weather } = weatherData;
  const { temp, humidity } = main;
  const { description, icon } = weather[0];

  return (
    <div
      className={`p-6 rounded-lg shadow-lg w-full max-w-4xl mt-6 text-center ${
        theme === "light" ? "bg-white" : "bg-gray-700"
      }`}
    >
      <div className="flex justify-between items-center text-2xl font-bold">
        <h2 className="text-left">{name}</h2>
        <p className="text-right">
          {new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
      <div className="mt-4 flex justify-center items-center">
        <div className="text-6xl font-bold">{Math.round(temp)}°C</div>
        <img
          src={`${imgUrl}/${icon}@2x.png`}
          alt={description}
          className="ml-4 w-24 h-24"
        />
      </div>
      <p
        className={`text-center mt-4 ${
          theme === "light" ? "text-gray-600" : "text-gray-400"
        }`}
      >
        {humidity}% humidity
      </p>
    </div>
  );
};

export default WeatherCard;
