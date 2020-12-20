const api_key = process.env.WEATHER_API_KEY;

export const getSuggestions = async value => {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/search.json?key=${api_key}&q=${value}`)
    if(!response.ok){
      return response
    }
    const deserializedResponse = await response.json()
    return deserializedResponse
  }catch(error) {
    return error
  }
}
