import {it} from '../module/main_module';
import {today, upcoming} from '../helpers/raw_html';
import {getWeeklyWeatherInfo as getData} from '../api/weather_api'

class Events {
  constructor() {
    this.targetContainer = document.querySelector('.weatherbox-container');
    this.loading = it.is('div');
    this.loading.classes('laoding');
    // console.log(this.targetContainer);
  }

  setWeatherBox (){
    const container = it.is('div')
    container.classes('')

    this.weatherBox = container
  }
  
  hideSearchBox(){
    const searchBox = document.querySelector('.ss-container')
    searchBox.style.height = '0px';
    searchBox.innerHTML = ''
    const infoBox = document.querySelector('.is-container')
    infoBox.style.height = '100vh'
  }

  getInputAndSearch(){
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
    // this.targetContainer.append(this.loading)
    console.log(document.querySelector('.weatherbox-container'));
  }

  getdataAndRender(){
    // const container = document.querySelector('.weatherbox-container')
    // container.innerHTML = today()
  }
  
}
const event = new Events

export {event}