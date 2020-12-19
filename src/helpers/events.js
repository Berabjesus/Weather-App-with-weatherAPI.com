import {it} from '../module/main_module'

class Events {
  constructor() {
    this.weatherBox;
  }

  setWeatherBox () {
    const container = it.is('div')
    container.classes('weather-box')

    this.weatherBox = container
  }
  
  hideSearchBox() {
    const searchBox = document.querySelector('.ss-container')
    searchBox.style.height = '0px';
    searchBox.innerHTML = ''
    const infoBox = document.querySelector('.is-container')
    infoBox.style.height = '100vh'
  }

  getInputAndSearch(){
    const container = document.getElementById('infoContainer')
    container.append(this.weatherBox)
  }

  getApiAndRender(){
  
  }
  
}
const event = new Events

export {event}