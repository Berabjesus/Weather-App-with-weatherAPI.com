const api_key = process.env.WEATHER_API_KEY;

export const getWeeklyWeatherInfo = async city => {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${city}&days=7`)
    if(!response){
      return response
    }
    const deserializedResponse = await response.json()
    return deserializedResponse
  }catch(error) {
    return error
  }
}
