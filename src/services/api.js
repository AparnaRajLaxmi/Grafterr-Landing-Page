const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const getDelay = () => 1000 + Math.random() * 500;

let _cache = null;

const loadContent = async () => {
  const res = await fetch('/content.json');
  if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
  return res.json();
};

const getContent = async () => {
  if (_cache) return _cache;
  await delay(getDelay());
  _cache = await loadContent();
  return _cache;
};

export const fetchHeroContent = async () => {
  const content = await getContent();
  return { navigation: content.navigation, hero: content.hero };
};

export const fetchFeaturesContent = async () => {
  const content = await getContent();
  return content.featuresSection;
};

export const fetchNavigation = async () => {
  const content = await getContent();
  return content.navigation;
};