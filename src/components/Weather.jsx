import { useState } from 'react'
import { kelvinToCelsius, kelvinToFaharenheit } from '../func/converter'

const weatherImg = {
  '01d': '/images/weather/clearSky-d.png',
  '01n': '/images/weather/clearSky-n.png',
  '02d': '/images/weather/fewClouds-d.png',
  '02n': '/images/weather/fewClouds-n.png',
  '03d': '/images/weather/scatteredClouds.png',
  '03n': '/images/weather/scatteredClouds.png',
  '04d': '/images/weather/brokenClouds.png',
  '04n': '/images/weather/brokenClouds.png',
  '09d': '/images/weather/showerRain.png',
  '09n': '/images/weather/showerRain.png',
  '10d': '/images/weather/rain-d.png',
  '10n': '/images/weather/rain-n.png',
  '11d': '/images/weather/thunderstorm.png',
  '11n': '/images/weather/thunderstorm.png',
  '13d': '/images/weather/snow.png',
  '13n': '/images/weather/snow.png',
  '50d': '/images/weather/mist.png',
}

const Weather = ({ weatherInfo }) => {
  const [isCelsius, setIsCelsius] = useState(true)

  const handleChangeTemp = () => {
    setIsCelsius(!isCelsius)
  }

  return (
    <section className="text-center grid gap-6">
      <h2 className="font-bold text-2xl">
        {weatherInfo?.name}, {weatherInfo?.sys.country}
      </h2>

      <section className="grid gap-4 sm:grid-cols-[1fr_auto]">
        {/* Sección arriba  */}
        <article className="bg-white/40 p-4 rounded-3xl grid grid-cols-2 items-center gap-2">
          <h3 className="col-span-2 capitalize">
            {weatherInfo?.weather[0].description}
          </h3>

          <span className="text-4xl">
            {isCelsius
              ? kelvinToCelsius(weatherInfo?.main.temp)
              : kelvinToFaharenheit(weatherInfo?.main.temp)}
          </span>

          <div className="grid my-0 mx-auto w-14">
            <img src={weatherImg[weatherInfo?.weather[0].icon]} alt="" />
          </div>
        </article>
        {/* Sección abajo     */}
        <section className="bg-white/40 p-4 py-6 rounded-3xl grid grid-cols-3 justify-items-center items-center sm:grid-cols-1 sm:items-center">
          <article className="flex gap-2 sm:grid-cols-1 sm:items-center">
            <div>
              <img src="/images/icons/wind.png" alt="" />
            </div>
            <span>{weatherInfo?.wind.speed}m/s</span>
          </article>

          <article className="flex gap-2 sm:grid-cols-1 sm:items-center">
            <div>
              <img src="/images/icons/humidity.png" alt="" />
            </div>
            <span>{weatherInfo?.main.humidity}%</span>
          </article>

          <article className="flex gap-2 sm:grid-cols-1 sm:items-center">
            <div>
              <img src="/images/icons/pressure.png" alt="" />
            </div>
            <span>{weatherInfo?.main.pressure}hPs</span>
          </article>
        </section>
      </section>

      <button onClick={handleChangeTemp}>Change F / C</button>
    </section>
  )
}
export default Weather
