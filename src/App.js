import { useState } from 'react'; 
import WeatherCard from './components/WeatherCard';

function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)

 
  const fetchWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );

      const data = await res.json();
      if (data.cod === "404") {
        alert("City not found");
        return;
      }

      setWeather(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white px-4 py-10">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Weather App</h1>
        <div className="flex gap-2 mb-5">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city..."
            className="flex-1 bg-white/10 px-4 py-2 rounded-xl focus:outline-none placeholder-gray-300"
          />
          <button
            onClick={fetchWeather}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-xl"
          >
            Search
          </button>
        </div>



        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

export default App;
