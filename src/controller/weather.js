/* eslint-disable no-unused-expressions */
/* eslint-disable import/prefer-default-export */

import { it } from '../module/main_module';
import { current } from '../helpers/render';
import getWeeklyWeatherInfo from '../api/weather_api';

class WeatherController {
  constructor() {
    this.targetContainer;
    this.loading;
    this.filteredObject;
    this.basicInfo;
    this.today;
    this.getInputAndSearch = this.getInputAndSearch.bind(this);
  }

  update() {
    this.targetContainer = document.querySelector('.weatherbox-container');
    this.loading = it.is('div');
    this.loading.classes('align-self-center loading');
  }

  showError(errorType) {
    const errDiv = it.is('div');
    errDiv.classes('mx-auto py-5 px-2');
    const errMsg = it.is('h2');
    errMsg.innerText = `Something went wrong, Make sure you are connected to the internet and the city name is correct. Error Info: - ${errorType}`;
    errMsg.classes('text-white');
    errDiv.append(errMsg);
    this.targetContainer.innerHTML = '';
    this.targetContainer.append(errDiv);
  }

  getInputAndSearch() {
    this.targetContainer ? true : this.update();

    const input = document.getElementById('searchInput');
    const filteredInput = input.value.trim();
    if (filteredInput.length === 0) {
      input.classList.remove('input-border');
      input.classes('input-alert');
      return false;
    }
    input.classList.remove('input-alert');
    input.classes('input-border');

    this.targetContainer.append(this.loading);
    getWeeklyWeatherInfo(filteredInput)
      .then(response => {
        if (response instanceof Error) {
          this.showError(response.status);
          return false;
        }
        this.filterdata(response);
        this.setBasicInfo();
        this.setTodayWeatherInfo();
        this.renderCurrent();
        return true;
      })
      .catch(error => {
        this.showError(error);
        return false;
      });
    return true;
  }

  filterdata(rawData) {
    Object.keys(rawData.forecast.forecastday).forEach(day => {
      delete rawData.forecast.forecastday[day].hour;
    });
    this.filteredObject = rawData;
  }

  setBasicInfo() {
    const { location } = this.filteredObject;
    this.basicInfo = {
      city: location.name,
      country: location.country,
      lat: location.lat,
      lon: location.lon,
      time: location.localtime,
    };
  }

  setTodayWeatherInfo() {
    const { current } = this.filteredObject;
    const { forecast } = this.filteredObject;
    this.today = {
      day: (new Date(forecast.forecastday[0].date)).toDateString(),
      is_day: parseInt(current.is_day, 10) ? 'day' : 'night',
      temprature: current.temp_c,
      condition: current.condition.text,
      icon: current.condition.icon,
      wind: current.wind_mph,
      wind_direction: current.wind_dir,
      wind_degree: current.wind_degree,
      humidity: current.humidity,
      chance_of_rain: forecast.forecastday[0].day.daily_chance_of_rain,
      chance_of_snow: forecast.forecastday[0].day.daily_chance_of_snow,
      moonphase: forecast.forecastday[0].astro.moon_phase,
      secondDay: {
        day: (new Date(forecast.forecastday[1].date)).toDateString(),
        condition: forecast.forecastday[1].day.condition.text,
        icon: forecast.forecastday[1].day.condition.icon,
      },
      thirdDay: {
        day: (new Date(forecast.forecastday[2].date)).toDateString(),
        condition: forecast.forecastday[2].day.condition.text,
        icon: forecast.forecastday[2].day.condition.icon,
      },
    };
  }

  renderCurrent() {
    this.targetContainer.innerHTML = '';
    this.targetContainer.innerHTML = (current(this.basicInfo, this.today));
  }
}

const weather = new WeatherController();

export { weather };