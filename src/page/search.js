import { data } from 'jquery'
import {it} from '../module/main_module'

const section = () => {
  const container = it.is('section')
  container.classes('d-flex flex-column w-100 ss-search-container')
  const header = it.is('h2')
  header.innerText = '< aurApp />'

  const inputContainer = it.is('div')
  inputContainer.classes('row d-flex flex-column align-items-center px-2 pt-1 mt-1 pb-0 mb-0 h-100 position-relative')
  const formGroup = it.is('div')
  formGroup.classes('form-group col-12 col-md-10 col-lg-7')
  const input = it.is('input')
  input.classes('form-control px-3 ss-input-form')
  input.placeholder = 'Enter city or country name here'
  input.setAttribute('list', 'cityName')
  const datalist = it.is('datalist')
  datalist.id = "cityName";
  const searchButton = it.is('button')
  searchButton.classes('ss-custom-btn')
  searchButton.id = 'ss'
  searchButton.innerText = 'Search'
  formGroup.append(input)
  inputContainer.append(formGroup, datalist, searchButton)

  container.append(header, inputContainer)
  return container
}

export { section as search }