import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './components/Weather'
import Loader from './components/Loader'

// const backgroundImg = {
//   '01d':
// '01n':
// '02d':
// '02n':
// '03d':
// '03n':
// '04d':
// '04n':
// '09d':
// '09n':
// '10d':
// '10n':
// '11d':
// '11n':
// '13d':
// '13n':
// '50d':
// '50n':
// }

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const API_KEY = '44f1f57375cf9c084dc69a88bc046a61'
    const name = e.target.city.value
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`

    axios
      .get(URL)
      .then(({ data }) => {
        let newData = data
        newData.weatherImage = ''
        if (data.weather[0].icon === '01d') {
          newData.weatherImage = 'bg-clearBg'
        }
        if (data.weather[0].icon === '01n') {
          newData.weatherImage = 'bg-rainBg'
        }
        if (data.weather[0].main === 'Clouds') {
          newData.weatherImage = 'bg-cloudsBg'
        }
        if (data.weather[0].main === 'Snow') {
          newData.weatherImage = 'bg-snowBg'
        }
        if (data.weather[0].main === 'Thunderstorm') {
          newData.weatherImage = 'bg-thunderstromBg'
        }
        if (data.weather[0].main === 'Rain') {
          newData.weatherImage = 'bg-rainBg'
        }
        setWeatherInfo(newData)
        return newData
      })
      .catch((err) => console.log(err))
  }

  const success = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const API_KEY = '44f1f57375cf9c084dc69a88bc046a61'

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    axios
      .get(URL)
      .then(({ data }) => {
        let newData = data
        newData.weatherImage = ''
        if (data.weather[0].icon === '01d') {
          newData.weatherImage = 'bg-clearBg'
        }
        if (data.weather[0].icon === '01n') {
          newData.weatherImage = 'bg-rainBg'
        }
        if (data.weather[0].main === 'Clouds') {
          newData.weatherImage = 'bg-cloudsBg'
        }
        if (data.weather[0].main === 'Snow') {
          newData.weatherImage = 'bg-snowBg'
        }
        if (data.weather[0].main === 'Thunderstorm') {
          newData.weatherImage = 'bg-thunderstromBg'
        }
        if (data.weather[0].main === 'Rain') {
          newData.weatherImage = 'bg-rainBg'
        }
        setWeatherInfo(newData)
        return newData
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  return (
    <main
      className={`${
        weatherInfo?.weatherImage || ''
      } bg-center min-h-screen text-black flex justify-center items-center font-principal-font p3`}
    >
      {weatherInfo ? (
        <Weather weatherInfo={weatherInfo} handleSubmit={handleSubmit} />
      ) : (
        <Loader />
      )}
    </main>
  )
}

export default App
