const CACHE_KEY = "namasteDevApiCache";
const CACHE_TTL = 1000 * 60 * 60 * 24; // 1 day in milliseconds

async function fetchWithCache(url) {
  const urlCacheKey = CACHE_KEY + url;
  const cached = localStorage.getItem(urlCacheKey);
  const cachedTime = localStorage.getItem(`${urlCacheKey}_time`);

  if (cached && cachedTime && Date.now() - cachedTime < CACHE_TTL) {
    return JSON.parse(cached); // return cached response
  }

  const response = await fetch(url);
  const data = await response.json();

  localStorage.setItem(urlCacheKey, JSON.stringify(data));
  localStorage.setItem(`${urlCacheKey}_time`, Date.now());

  return data;
}

export default fetchWithCache;