/* eslint-disable import/prefer-default-export */

const currentWeatherBox = (basic, current) => `   <div class=" row col-12 d-flex weather-box text-white">
  <div class="col-12 d-flex flex-column border-bottom border-white pb-3 wb-header">
    <h1>Day : ${current.day}</h1>
    <div class="d-flex flex-wrap">
      <h1 class="p-0">${basic.city}, ${basic.country}</h1>
      <small class="p-0 ml-3 align-self-end">lat : ${basic.lat} / long: ${basic.lon}</small>  
    </div>
  </div>
  <div class="col-12 col-md-6 d-flex flex-column py-3 border-right border-white wb-temp">
    <div class="d-flex">
      <h4>Local Time : ${basic.time}. Its ${current.is_day} time in ${basic.city}</h4>  
    </div>
    <div class="d-flex">
      <h4 class="align-self-center">${current.condition}</h4>
      <img class="ml-3 img" src="${current.icon}" alt="">
    </div>
    <div class ="d-flex">
      <h4>Temprature : <strong id="tempValue">${current.temprature}</strong><sup>o</sup> <strong id="tempType">C</strong></h4>
      <div class="d-flex position-relative align-items-center mx-auto">
        <h4><sup class="align-self-start">o</sup>C</h4>
        <label class="switch align-self-center ml-3">
          <input id="toggleTemp" type="checkbox"/> 
          <div></div>
        </label>  
        <h4><sup class="ml-3 align-self-start">o</sup>F</h4>
      </div>
    </div>
    <h4>Wind : ${current.wind} mph, wind direction : ${current.wind_direction} and wind degree : ${current.wind_degree}</h4>
    <h4>Humidity : ${current.humidity} degrees</h4>
    <h4>Chance of rain : ${current.chance_of_rain} %</h4>
    <h4>Chance of snow : ${current.chance_of_snow} %</h4>
    <h4>Moon Phase : ${current.moonphase}</h4>
  </div>
  <div class="col-12 col-md-6 py-3 d-flex flex-column">
    <h3 class="border-bottom border-white pb-2">Next two days</h3>
    <div class="d-flex flex-column border-bottom border-white pb-2">
      <h3>${current.secondDay.day}</h3>
      <div class="d-flex flex-wrap">
        <h4 class="align-self-center">${current.secondDay.condition}</h4>
        <img class="ml-3 img" src="${current.secondDay.icon}" alt="">
      </div>
    </div>
    <div class="d-flex flex-column">
      <h3>${current.thirdDay.day}</h3>
      <div class="d-flex flex-wrap">
        <h4 class="align-self-center">${current.thirdDay.condition}</h4>
        <img class="ml-3 img" src="${current.thirdDay.icon}" alt="">
      </div>
    </div>
  </div>
</div>`;

export { currentWeatherBox as current };