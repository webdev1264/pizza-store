"use client";

import { useSelector } from "react-redux";

import EmptyCart from "../../components/Cart/EmptyCart";
import { selectCart } from "../../redux/cart/selectors";
import CartWithItems from "../../components/Cart/CartWithItems";

const CartPage: React.FC = () => {
  const cart = useSelector(selectCart);

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return <CartWithItems />;
};

export default CartPage;
