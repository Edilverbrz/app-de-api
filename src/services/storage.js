const FAVORITES_KEY = "app_products_favorites";
const CART_KEY = "app_products_cart";

const parseJson = (value, fallback) => {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.warn("storage.parseJson failed", error);
    return fallback;
  }
};

const saveItem = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`storage.saveItem(${key}) failed:`, error);
  }
};

const getItem = (key, fallback) => {
  try {
    return parseJson(window.localStorage.getItem(key), fallback);
  } catch (error) {
    console.error(`storage.getItem(${key}) failed:`, error);
    return fallback;
  }
};

export const saveFavorites = (ids) => saveItem(FAVORITES_KEY, ids);
export const getFavorites = () => getItem(FAVORITES_KEY, []);

export const saveCart = (items) => saveItem(CART_KEY, items);
export const getCart = () => getItem(CART_KEY, []);
