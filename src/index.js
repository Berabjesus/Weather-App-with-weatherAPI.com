import "@babel/polyfill";
import 'bootstrap';
import './scss/main.scss';
import home from './page/home'

// 

// import {getWeeklyWeatherInfo as api} from './api/weather_api'
import {getWeeklyWeatherInfo as wApi} from './api/weather_api'

// wApi('addis ababa')
// 

const body = document.querySelector('.body')
body.append(home())