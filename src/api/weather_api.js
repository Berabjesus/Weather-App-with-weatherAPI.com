const api_key = process.env.WEATHER_API_KEY;

export const getWeeklyWeatherInfo = async city => {
  // const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${city}&days=7`)
  console.log(response.ok);
  
  const deserializedResponse = await response.json()
  console.log(deserializedResponse);
  
  // return deserializedResponse
}
