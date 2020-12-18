import it from '../module/main_module'

const Section = () => {
  const container = it.is('section')
  container.classes('w-100 custom-border search-container custom-border nb')  
  return container
}


export default Section