import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";
import { RootState } from "../redux/store";
import {
  SunIcon,
  MoonIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

interface HeaderProps {
  onSearch: (city: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(city);
  };
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <header
      className={`w-full flex flex-col items-center p-4 bg-opacity-80 ${
        theme === "light" ? "bg-gray-200" : "dark:bg-gray-800"
      }`}
    >
      <div className="flex items-center w-full max-w-4xl justify-between flex-wrap">
        <h1 className="text-2xl font-bold">Weather Dashboard</h1>
        <button
          onClick={handleToggleTheme}
          className={`p-2 rounded ${
            theme === "light" ? "bg-gray-300" : "bg-gray-600"
          }`}
        >
          {theme === "light" ? (
            <MoonIcon className="h-6 w-6" />
          ) : (
            <SunIcon className="h-6 w-6" />
          )}
        </button>
      </div>
      <form
        onSubmit={handleSearch}
        className="w-full max-w-4xl mt-4 flex justify-center"
      >
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={`w-full p-2 rounded-l-md focus:outline-none border ${
            theme === "light"
              ? "border-gray-300 bg-white"
              : "border-gray-600 bg-gray-700"
          }`}
        />
        <button
          type="submit"
          className={`p-2 rounded-r-md border ${
            theme === "light"
              ? "border-gray-300 bg-white"
              : "border-gray-600 bg-gray-700"
          }`}
        >
          <MagnifyingGlassIcon className="h-6 w-6" />
        </button>
      </form>
    </header>
  );
};

export default Header;
