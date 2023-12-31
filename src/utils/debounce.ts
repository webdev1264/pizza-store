const debounce = <T extends string[]>(callback: (...args: T) => void, timeout = 200) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: T) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
};

export default debounce;
