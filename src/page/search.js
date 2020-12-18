import { data } from 'jquery'
import {it} from '../module/main_module'

const section = () => {
  const container = it.is('section')
  container.classes('d-flex flex-column w-100 ss-search-container custom-border')
  const header = it.is('h2')
  header.innerText = '< aurApp />'

  const inputContainer = it.is('div')
  inputContainer.classes('row d-flex flex-column align-items-center form-group px-5 mt-1')
  const input = it.is('input')
  input.classes('form-control col-12 col-md-10 col-lg-8 px-3 ss-input-form')
  input.placeholder = 'Enter city or country name here'
  input.setAttribute('list', 'cityName')
  const datalist = it.is('datalist')
  datalist.id = "cityName";
  inputContainer.append(input, datalist)

  const searchButton = it.is('button')
  searchButton.classes('ss-custom-btn')
  searchButton.innerText = 'Search'

  container.append(header, inputContainer, searchButton)
  return container
}

export { section as search }