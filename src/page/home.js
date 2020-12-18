import it from '../module/main_module'

const firstSection = () => {
  const container = it.is('section')
  container.classes('w-100 custom-border fs-container')  
  return container
}

const home = () => {
  return firstSection()
}

export default home