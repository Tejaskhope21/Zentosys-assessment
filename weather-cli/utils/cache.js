const fs = require('fs');
const path = require('path');
const { CACHE_TTL } = require('../config');

const CACHE_PATH = path.join(__dirname, '..', 'cache.json');

function readCache() {
  if (!fs.existsSync(CACHE_PATH)) return {};
  const content = fs.readFileSync(CACHE_PATH, 'utf-8');
  try {
    return JSON.parse(content);
  } catch {
    return {};
  }
}

function writeCache(cache) {
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
}

function getCachedWeather(city) {
  const cache = readCache();
  const entry = cache[city.toLowerCase()];
  if (!entry) return null;

  const now = Math.floor(Date.now() / 1000);
  if (now - entry.timestamp > CACHE_TTL) {
    return null; // expired
  }
  return entry.data;
}

function setCachedWeather(city, data) {
  const cache = readCache();
  cache[city.toLowerCase()] = {
    data,
    timestamp: Math.floor(Date.now() / 1000),
  };
  writeCache(cache);
}

module.exports = {
  getCachedWeather,
  setCachedWeather,
};
