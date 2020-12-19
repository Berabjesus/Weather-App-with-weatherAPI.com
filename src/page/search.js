import {it} from '../module/main_module'
import {event} from '../helpers/events'

const inputContainer = () => {
  const inputContainer = it.is('div')
  inputContainer.classes('row d-flex flex-column align-items-center px-2 pt-1 mt-1 pb-0 mb-0 h-100 position-relative')
  const formGroup = it.is('div')
  formGroup.classes('form-group col-12 col-md-10 col-lg-7')
  const input = it.is('input')
  input.classes('form-control px-3 ss-input-form')
  input.placeholder = 'Enter city or country name here'
  input.setAttribute('list', 'cityName')
  formGroup.append(input)

  const datalist = it.is('datalist')
  datalist.id = "cityName";

  const searchButton = it.is('button')
  searchButton.innerText = 'Search'
  searchButton.classes('ss-custom-btn font-weight-bolder')
  searchButton.id = 'searchButton'
  searchButton.addEventListener('click', event.getInputAndSearch)
  inputContainer.append(formGroup, datalist, searchButton)

  return inputContainer
}

const section = () => {
  const container = it.is('section')
  container.classes('d-flex flex-column w-100 ss-container')

  const headerContainer = it.is('div')
  headerContainer.classes('d-flex flex-column pl-2')
  const brand = it.is('h2')
  brand.innerText = '< aurApp />'

  const header = it.is('h6')
  header.classes('text-dark mb-1')
  header.innerText = 'Your Daily Weather Information'
  headerContainer.append(brand, header)


  container.append(headerContainer, inputContainer())
  return container
}

export { section as search }