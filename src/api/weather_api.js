const API_KEY = process.env.WEATHER_API_KEY;

const getWeeklyWeatherInfo = async city => {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7`);
    if (!response.ok) {
      return response;
    }
    const deserializedResponse = await response.json();
    return deserializedResponse;
  } catch (error) {
    return error;
  }
};

export default getWeeklyWeatherInfo;