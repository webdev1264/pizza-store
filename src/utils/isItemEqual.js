const isItemEqual = (obj1, obj2) => {
  return obj1.id === obj2.id && obj1.type === obj2.type && obj1.size === obj2.size;
};

export default isItemEqual;
