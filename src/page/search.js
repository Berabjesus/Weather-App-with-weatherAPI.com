import {it} from '../module/main_module'

const section = () => {
  const container = it.is('section')
  container.classes('d-flex flex-column w-100  ss-search-container custom-border')
  const header = it.is('h2')
  header.innerText = '< aurApp />'

  const inputContainer = it.is('div')
  inputContainer.classes('row d-flex flex-column align-items-center form-group px-5 mt-3')
  const input = it.is('input')
  input.classes('form-control col-12 col-md-10 col-lg-8 ss-input-form')
  input.placeholder = 'asd'
  inputContainer.append(input)

  container.append(header, inputContainer)
  return container
}

export { section as search }