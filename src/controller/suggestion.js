import {getSuggestions} from '../api/suggestion_api'

class Suggest {
  constructor(){

  }

  getInputForSuggestion() {
    const input = document.getElementById('searchInput')
    const filteredInput = input.value.trim()
    const cont = document.getElementById('cityName')
    const info = document.getElementById('inputInfo')
    cont.innerHTML =''
    if(filteredInput.length > 2 && filteredInput !== undefined) {
      getSuggestions(filteredInput)
      .then(response => {
        if(response instanceof Error){
          return false
        }
        if(response.length === 0)
          info.innerText ='No results match your letters'
        else
          info.innerText = 'Type 3 letters to get suggestions'
        response.forEach(obj => {
          const opt = document.createElement('option')
          opt.innerText = obj.name
          cont.appendChild(opt)
        });
      })
      .catch(error => {
        info.innerText = error
      })
    }
  }
}

const suggestion  = new Suggest
export {suggestion}