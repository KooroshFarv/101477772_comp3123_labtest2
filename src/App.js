import { useState } from 'react'; 
import WeatherCard from './components/WeatherCard';

function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
 
  const fetchWeather = async () => {
    if (!city.trim()) return
    try {
      setLoading(true)
      setError(null)
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );

      const data = await res.json();
      if (data.cod === '404') {
        setError('city not found !!')
        setWeather(null)
        return;
      }

      setWeather(data);
    } catch (err) {
      setError('please try again')
    } finally {
      setLoading(false)
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
            placeholder="Enter city"
            className="flex-1 bg-white/10 px-4 py-2 rounded-xl focus:outline-none placeholder-gray-300"
          />
          <button
            onClick={fetchWeather}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-xl"
          >
            {loading ? 'loading ..' : 'Search'}
          </button>
        </div>

        {error && (
          <div className='bg-red-700 rounded-lg mb-4 text-red-300 px-4 py-2 border-red-200/50'>{error}</div>
        )}

        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

export default App;
