const axios = require('axios');
const { API_KEY, BASE_URL } = require('../config');

async function fetchWeather(city) {
  const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
  const res = await axios.get(url);
  return res.data;
}

module.exports = { fetchWeather };
