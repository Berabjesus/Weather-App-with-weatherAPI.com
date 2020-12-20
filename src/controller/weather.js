import {it} from '../module/main_module';
import {today, upcoming} from '../helpers/raw_html';
import {getWeeklyWeatherInfo as getData} from '../api/weather_api'

class weatherController {
  constructor() {
    this.targetContainer;
    this.loading;
    this.filteredObject;
    this.basicInfo;
    this.today;
    this.secondDay;
    this.thirdDay;
    this.getInputAndSearch = this.getInputAndSearch.bind(this);
  }

  update () {
    this.targetContainer = document.querySelector('.weatherbox-container');
    this.loading = it.is('div');
    this.loading.classes('align-self-center loading');
  }
  
  // hideSearchBox(){
  //   const searchBox = document.querySelector('.ss-container')
  //   searchBox.style.height = '0px';
  //   searchBox.innerHTML = ''
  //   const infoBox = document.querySelector('.is-container')
  //   infoBox.style.height = '100vh'
  // }

  getInputAndSearch() {
    this.targetContainer ? true : this.update();
    
    const input = document.getElementById('searchInput')
    const filteredInput = input.value.trim()
    if(filteredInput.length === 0) {
      input.classList.remove('input-border')
      input.classes('input-alert')
      return false
    } else{
      input.classList.remove('input-alert')
      input.classes('input-border')
    }
    this.targetContainer.append(this.loading)
    getData(filteredInput).then(response => {
      this.filterdata(response)
      this.setBasicInfo()
      this.setTodayWeatherInfo()
    })
  }

  filterdata(rawData){
    Object.keys(rawData.forecast.forecastday).forEach(day => {
      delete rawData.forecast.forecastday[day].hour
    });
    this.filteredObject = rawData
  }

  setBasicInfo(){
    const location =  this.filteredObject.location
    this.basicInfo = {
      city: location.name,
      country: location.country,
      lat: location.lat,
      lon: location.lon,
      time: location.localtime,
    }
  }

  setTodayWeatherInfo(){
    const current = this.filteredObject.current
    const forecast = this.filteredObject.forecast
    this.today = {
      day: new Date(forecast.forecastday[0].date),
      is_day : current.is_day,
      temprature: current.temp_c,
      condition: current.condition.text,
      icon: current.condition.icon,
      wind:  current.wind_mph,
      wind_direction: current.wind_dir,
      wind_degree: current.wind_degree,
      humidity: current.humidity,
      chance_of_rain: forecast.forecastday[0].day.daily_chance_of_rain,
      chance_of_snow: forecast.forecastday[0].day.daily_chance_of_snow,
      moonphase: forecast.forecastday[0].astro.moon_phase
    }
  }

  getdataAndRender(data){
    this.targetContainer.innerHTML = ''
    this.targetContainer.innerHTML = data
    console.log(data);
  }
  
}

const weather = new weatherController

export {weather}