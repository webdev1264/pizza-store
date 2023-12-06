import { useSelector } from "react-redux";

import CartWithItems from "../components/Cart/CartWithItems";
import EmptyCart from "../components/Cart/EmptyCart";
import { selectCart } from "../redux/slices/cartSlice";

const Cart = () => {
  const cart = useSelector(selectCart);

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return <CartWithItems />;
};

export default Cart;
