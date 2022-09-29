const removeLocalStorage = (key) => {
  if (localStorage.getItem(key)) {
    localStorage.removeItem(key);
  }
};

removeLocalStorage("av");
