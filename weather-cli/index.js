
const path = require('path');
const { getCachedWeather, setCachedWeather } = require('./utils/cache');
const { fetchWeather } = require('./utils/fetchWeather');

const city = process.argv[2];

if (!city) {
  console.log('❌ Please provide a city name');
  process.exit(1);
}

(async () => {
  try {
    const cached = getCachedWeather(city);

    if (cached) {
      console.log(' Using cached data:\n');
      displayWeather(cached);
    } else {
      const data = await fetchWeather(city);
      setCachedWeather(city, data);
      console.log('  Live Weather:\n');
      displayWeather(data);
    }
  } catch (err) {
    console.error(' Error:', err.message);
  }
})();

function displayWeather(data) {
  console.log(`City: ${data.name}`);
  console.log(`Temperature: ${data.main.temp}°C`);
  console.log(`Weather: ${data.weather[0].description}`);
  console.log(`Wind Speed: ${data.wind.speed} m/s`);
}
