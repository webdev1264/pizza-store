import { Link } from "react-router-dom";

import emptyCart from "../../assets/img/empty-cart.png";

const EmptyCart: React.FC = () => {
  return (
    <div className="container container--cart">
      <div className="cart cart--empty">
        <h2>
          The cart is empty <span>😕</span>
        </h2>
        <p>
          Most likely, you haven't ordered pizza yet.
          <br />
          To order pizza, go to the main page.
        </p>
        <img src={emptyCart} alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>Back</span>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
