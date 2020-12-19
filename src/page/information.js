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

  const InfoContainer = it.is('div')
  InfoContainer.classes('col-12 col-md-9 row d-flex flex-column p-0 pt-3 weatherbox-container')

  container.append(snowContainer(), InfoContainer)
  return container
}

export {section as information}