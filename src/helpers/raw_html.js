const currentWeatherBox = () => {
  let t = 'test'
  return `
<div class=" row col-12 d-flex weather-box">
  <div class="col-12 col-md-6 d-flex flex-column text-center wb-header ">
    <h1>Day : ${t}</h1>
    <h1>${t} / ${t}</h1>
    <small>lat : ${t} / long: ${t}</small>
    <strong>Local Time : ${t} its ${t} time in ${t}</strong>
  </div>
  <div class="col-12 col-md-6 d-flex flex-column wb-temp">
    <img src="${t}" alt="">
    <big>Temprature : ${t}</big>
    <big>Wind : ${t} mph, wind direction : ${t} and wind degree : ${t}</big>
    <big>Humidity : ${t}</big>
    <big>Chance of rain : ${t}</big>
    <big>Chance of snow : ${t}</big>
    <big>Moon Phase : ${t}</big>
  </div>
</div>`
}

const upcomingDaysWeather = () => {

}

export {currentWeatherBox as today, upcomingDaysWeather as upcoming}