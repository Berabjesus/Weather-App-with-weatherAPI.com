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
  container.classes('d-flex flex-column is-container ')
  const header = it.is('h1')
  header.innerText = 'Information goes in here'

  const infoBoxcontainer = it.is('div')
  infoBoxcontainer.classes('')
  infoBoxcontainer.id = 'infoContainer'

  container.append(snowContainer(), header, infoBoxcontainer)
  return container
}

export {section as information}