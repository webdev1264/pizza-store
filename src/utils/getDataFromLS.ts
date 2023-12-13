export const getDataFromLS = (name: string) => {
  const data = localStorage.getItem(name);
  if (data) {
    return JSON.parse(data);
  }
  return [];
};
