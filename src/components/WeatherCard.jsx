import React from 'react'

const WeatherCard = ({weather}) => {
    const icon = weather.weather[0]?.icon
    const temp = Math.round(weather.main.temp)
    const desc = weather.weather[0]?.description
    const name = weather.name
    const feeling = Math.round(weather.main.feels_like)
    const max = Math.round(weather.main.temp_max)
    const sunset = weather.sys.sunset
    const sunrise = weather.sys.sunrise

    const timeFormat = (unix) => 
        new Date(unix * 1000).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        })
    return (
    <div className='max-w-sm mx-auto mt-10 rounded-2xl bg-white/10 backdrop-blur-lg p-6 text-white shadow-xl'>
        <div className='flex items-center justify-between'>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt='icon'
            className='w-20 h-20 bg-white/40 rounded-2xl'  />
        <h1 className="text-5xl font-bold">{temp}°C</h1>
        </div>
              <h3 className="text-2xl mt-2 font-semibold">{name}</h3>
              <p className="text-sm opacity-80 capitalize">{desc}</p>

       <div className="grid grid-cols-3 mt-6 text-center gap-3 text-sm">

        <div className="bg-white/10 p-3 rounded-lg">
            <p className="font-bold">{feeling}°C</p>
            <p className="opacity-70 text-xs">Feels Like</p>
        </div>

          <div className="bg-white/10 p-3 rounded-lg">
          <p className="font-bold">{max}°C</p>
          <p className="opacity-70 text-xs">Max Temp</p>
          </div>

        <div className="bg-white/10 p-3 rounded-lg">
          <p className="font-bold">{weather.wind.speed} km/h</p>
          <p className="opacity-70 text-xs">Wind</p>
        </div>
        <div className="bg-white/10 p-3 rounded-lg">
          <p className="font-bold">{weather.main.humidity}%</p>
          <p className="opacity-70 text-xs">Humidity</p>
        </div>
        <div className="bg-white/10 p-3 rounded-lg">
          <p className="font-bold">{weather.clouds.all}%</p>
          <p className="opacity-70 text-xs">Clouds</p>

        </div>
             <div className="bg-white/10 p-3 rounded-lg">
          <p className="font-bold">{timeFormat(sunrise)}</p>
          <p className="opacity-70 text-xs">Sunrise</p>
        </div>
           <div className="bg-white/10 p-3 rounded-lg">
          <p className="font-bold">{timeFormat(sunset)}</p>
          <p className="opacity-70 text-xs">Sunset</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard