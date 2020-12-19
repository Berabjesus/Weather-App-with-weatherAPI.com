import "@babel/polyfill";
import 'bootstrap';
import './scss/main.scss';
import {search} from './page/search';
import {information} from './page/information';

const main = document.querySelector('.main')
// main.classList.add('custom-border')
main.append(search(), information())
const body = document.querySelector('.body')
body.prepend(main)