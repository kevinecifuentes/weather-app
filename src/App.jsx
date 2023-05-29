import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './components/Weather'
import Loader from './components/Loader'

const backgroundImg = {
  '01d': '/images/clearSky.jpg',
  '01n': '/images/clearSkyNight.jpg',
  '02d': '/images/fewClouds.jpg',
  '02n': '/images/fewClouds.jpg',
  '03d': '/images/parcialNublado.jpg',
  '03n': '/images/parcialNubladoNight.jpg',
  '04d': '/images/muyNublado.jpg',
  '04n': '/images/muyNublado.jpg',
  '09d': '/images/rain.jpg',
  '09n': '/images/rain.jpg',
  '10d': '/images/aguacero.jpg',
  '10n': '/images/aguacero.jpg',
  '11d': '/images/thunderstrom.jpg',
  '11n': '/images/thunderstrom.jpg',
  '13d': '/images/snow2.jpg',
  '13n': '/images/snow2.jpg',
  '50d': '/images/ventoso.jpg',
  '50n': '/images/ventoso.jpg',
}

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const API_KEY = '44f1f57375cf9c084dc69a88bc046a61'
    const name = e.target.city.value
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`

    axios
      .get(URL)
      .then(({ data }) => setWeatherInfo(data))
      .catch((err) => console.log(err))
  }

  const success = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const API_KEY = '44f1f57375cf9c084dc69a88bc046a61'

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    axios
      .get(URL)
      .then(({ data }) => setWeatherInfo(data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  return (
    <main className="relative min-h-screen text-black flex justify-center items-center font-principal-font p3">
      <div className="absolute bg-cover bg-center w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={backgroundImg[weatherInfo?.weather[0].icon]}
          alt=""
        />
      </div>
      {weatherInfo ? (
        <Weather weatherInfo={weatherInfo} handleSubmit={handleSubmit} />
      ) : (
        <Loader />
      )}
    </main>
  )
}

export default App
