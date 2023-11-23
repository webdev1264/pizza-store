const debounce = (callback, timeout = 200) => {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
};

export default debounce;
