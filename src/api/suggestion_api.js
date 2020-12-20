const API_KEY = process.env.WEATHER_API_KEY;

const getSuggestions = async value => {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${value}`);
    if (!response.ok) {
      return response;
    }
    const deserializedResponse = await response.json();
    return deserializedResponse;
  } catch (error) {
    return error;
  }
};

export default getSuggestions;
