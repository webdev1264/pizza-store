import CartWithItems from "../components/Cart/CartWithItems";
import EmptyCart from "../components/Cart/EmptyCart";
import { useCart } from "../redux/slices/cartSlice";

const Cart = () => {
  const cart = useCart();

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return <CartWithItems />;
};

export default Cart;
