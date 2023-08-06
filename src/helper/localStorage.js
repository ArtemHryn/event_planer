export const getFilterFromLocalStorage = (key) => {
  const fromLocalStorage = localStorage.getItem(key);
  try {
    return JSON.parse(fromLocalStorage);
  } catch (error) {
    return fromLocalStorage;
  }
};

export const setFilterInLocalStorage = (key, filter) => {
  localStorage.setItem(key, JSON.stringify(filter));
};
