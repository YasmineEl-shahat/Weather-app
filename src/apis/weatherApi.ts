import axios from "axios";
import { apiKey, apiUrl } from "../config";
import { WeatherData } from "../interfaces/WeatherData";

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  const response = await axios.get(`${apiUrl}/weather`, {
    params: {
      q: city,
      appid: apiKey,
      units: "metric",
    },
  });
  return response.data;
};
