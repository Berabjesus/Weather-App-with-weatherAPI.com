/* eslint-disable import/prefer-default-export */

import { it } from '../module/main_module';
import { weather } from '../controller/weather';
import getInputForSuggestion from '../controller/suggestion';

const header = () => {
  const headerContainer = it.is('div');
  headerContainer.classes('d-flex flex-column pl-2');
  const brand = it.is('h2');
  brand.innerText = 'Appmosphere';

  const header = it.is('h6');
  header.classes('text-dark mb-1');
  header.innerText = 'Your Daily Weather Information';
  headerContainer.append(brand, header);

  return headerContainer;
};

const inputContainer = () => {
  const inputContainer = it.is('div');
  inputContainer.classes('row d-flex flex-column align-items-center px-2 pt-1 mt-1 pb-0 mb-0 h-100 position-relative');
  const formGroup = it.is('div');
  formGroup.classes('form-group col-12 col-md-10 col-lg-7');
  const info = it.is('p');
  info.classes('mb-1');
  info.id = 'inputInfo';
  info.innerText = 'Type 3 letters to get suggestions';
  const input = it.is('input');
  input.classes('form-control px-3 ss-input-form input-border');
  input.id = 'searchInput';
  input.placeholder = 'Enter city or country name here';
  input.setAttribute('list', 'cityName');
  input.addEventListener('keyup', getInputForSuggestion);
  formGroup.append(input, info);

  const datalist = it.is('datalist');
  datalist.id = 'cityName';
  datalist.classes('focus-off');
  datalist.setAttribute('autocomplete', 'on');
  const searchButton = it.is('button');
  searchButton.innerText = 'Search';
  searchButton.classes('ss-custom-btn font-weight-bolder');
  searchButton.id = 'searchButton';
  searchButton.addEventListener('click', weather.getInputAndSearch);
  inputContainer.append(formGroup, datalist, searchButton);

  return inputContainer;
};

const section = () => {
  const container = it.is('section');
  container.classes('d-flex flex-column w-100 ss-container');

  container.append(header(), inputContainer());
  return container;
};

export { section as search };