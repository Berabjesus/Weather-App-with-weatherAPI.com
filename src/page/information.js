import {it} from '../module/main_module'

const snowContainer = () => {
  const contaner = it.is('div')
  contaner.classes('wrapper')
  for (let i = 0; i < 3; i += 1) {
    const div = it.is('div')    
    div.classes(`snow layer${i+1}`)
    const divDelayed = it.is('div')
    divDelayed.classes(`snow layer${i+1} delay`)
    contaner.append(div, divDelayed)
  }
  return contaner
}

const section = () => {
  const container = it.is('section')
  container.classes('row d-flex flex-column align-items-center is-container')

  const headerContainer = it.is('div')
  headerContainer.classes('text-center pt-5')
  const header = it.is('h1')
  header.innerText = 'Information goes in here'
  headerContainer.append(header)

  const InfoContainer = it.is('div')
  InfoContainer.classes('col-12 col-md-9 row d-flex flex-column p-0 info-container')

  container.append(snowContainer(),headerContainer, InfoContainer)
  return container
}

export {section as information}