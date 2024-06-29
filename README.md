# Weather Dashboard

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/YasmineEl-shahat/Weather-app.git
   cd weather-dashboard
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   - Create a `.env` file in the root directory of your project.
   - Add your OpenWeatherMap API key and URL to the `.env` file:

     ```plaintext
     VITE_API_KEY=your_api_key_here
     VITE_API_URL=https://api.openweathermap.org/data/2.5
     VITE_IMG_URL=http://openweathermap.org/img/wn

     ```

4. **Run the application**:
   ```bash
   npm run dev
   ```

## Description

This is a Weather Dashboard application built with React and Vite. It allows users to search for current weather information by city name. The application features a responsive design and an optional dark mode.

## Project Structure
