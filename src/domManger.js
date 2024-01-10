function changeCity(newCity){
  const currCity = document.getElementsByClassName('currCity')[0]
  currCity.textContent = newCity
}

function updateCityInfo(newCond, newTemp, newIcon){
  const currCond = document.getElementsByClassName('currCondition')[0]
  currCond.textContent = newCond
  const currTemp = document.getElementsByClassName('currTemp')[0]
  currTemp.textContent = newTemp + '°c'
  const currIcon = document.getElementsByClassName('logo')[0]
  currIcon.src = newIcon
}

function addForecastDay(day, cond, temp, icon){
  let forecast = document.createElement('li')
  
  let forecastDay = document.createElement('div')
  forecastDay.textContent = day

  let forecastIcon = document.createElement('img')
  forecastIcon.src = icon
  
  let forecastTemp = document.createElement('div')
  forecastTemp.textContent = temp + '°c'
  let forecastCond = document.createElement('div')
  forecastCond.textContent = cond

  forecast.appendChild(forecastDay)
  forecast.appendChild(forecastCond)
  forecast.appendChild(forecastIcon)
  forecast.appendChild(forecastTemp)

  //Do the css here

  let dom = document.getElementById('forecasts')
  dom.appendChild(forecast)

}

function clearUL(){
  let dom = document.getElementById('forecasts')
  while (dom.childNodes.length > 0) {
    dom.removeChild(dom.lastChild);
}}

export {changeCity, updateCityInfo, addForecastDay, clearUL}