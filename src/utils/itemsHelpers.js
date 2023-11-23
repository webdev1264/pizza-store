const isItemEqual = (obj1, obj2) => {
  return obj1.id === obj2.id && obj1.type === obj2.type && obj1.size === obj2.size;
};

const totalItems = (cart) => {
  return cart.reduce((sum, item) => {
    sum += item.qty;
    return sum;
  }, 0);
};

const totalPrice = (cart) => {
  return cart.reduce((sum, item) => {
    sum += item.price * item.qty;
    return sum;
  }, 0);
};

export { isItemEqual, totalItems, totalPrice };