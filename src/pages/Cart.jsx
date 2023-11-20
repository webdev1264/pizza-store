import CartWithItems from "../components/Cart/CartWithItems";
import EmptyCart from "../components/Cart/EmptyCart";
import { useCart } from "../redux/slices/cartSlice";

const Cart = () => {
  const cart = useCart();
  return <>{cart.length === 0 ? <EmptyCart /> : <CartWithItems />}</>;
};

export default Cart;
