import './style.css';
const form = document.getElementById('city')
import { initialSetup } from './initialSetup';
import { changeCity, updateCityInfo, addForecastDay, clearUL } from "./domManger";

initialSetup()
form.addEventListener('submit', (event) => {
  event.preventDefault()

  const formData = new FormData(form)
  formData.forEach(function(value){
      updateInfo(value)
  })
})

function updateInfo(city) {
  fetch('https://api.weatherapi.com/v1/forecast.json?key=77c988ca24ae4cc689943705240701&days=7&q='+city, {mode: 'cors'})
      .then(function(response){
          return response.json()
      }).then(function(response){
          changeCity(response.location.name)
          const cond = response.current.condition.text
          const temp = response.current.temp_c
          const icon = response.current.condition.icon
          updateCityInfo(cond, temp, icon)
          clearUL()
          response.forecast.forecastday.forEach((element) => {
            addForecastDay(element.date, element.day.condition.text, element.day.avgtemp_c, element.day.condition.icon)
          })
      })
}

export {updateInfo}