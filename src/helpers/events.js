import {it} from '../module/main_module'
import {today, upcoming} from './raw_html'

class Events {
  constructor() {
    this.weatherBox;
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
    const container = document.querySelector('.weatherbox-container')
    container.innerHTML = today()
  }

  getApiAndRender(){
  
  }
  
}
const event = new Events

export {event}