import "@babel/polyfill";
import 'bootstrap';
import './scss/main.scss';
import {search} from './page/search'

const body = document.querySelector('.body')
body.classList.add('custom-border')
body.prepend(search())