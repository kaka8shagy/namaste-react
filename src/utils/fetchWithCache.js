const CACHE_KEY = "namasteDevApiCache";
const CACHE_TTL = 1000 * 60 * 60 * 24; // 1 day in milliseconds

async function fetchWithCache(url) {
  const cached = localStorage.getItem(CACHE_KEY);
  const cachedTime = localStorage.getItem(`${CACHE_KEY}_time`);

  if (cached && cachedTime && Date.now() - cachedTime < CACHE_TTL) {
    return JSON.parse(cached); // return cached response
  }

  const response = await fetch(url);
  const data = await response.json();

  localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  localStorage.setItem(`${CACHE_KEY}_time`, Date.now());

  return data;
}

export default fetchWithCache;