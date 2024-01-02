import Link from "next/link";
import emptyCart from "../../assets/img/empty-cart.png";
import Image from "next/image";

const EmptyCart: React.FC = () => {
  return (
    <div className="container container--cart">
      <div className="cart cart--empty">
        <h2>
          The cart is empty <span>😕</span>
        </h2>
        <p>
          Most likely, you have not ordered pizza yet.
          <br />
          To order pizza, go to the main page.
        </p>
        <Image src={emptyCart} alt="Empty cart" width={300} height={255} />
        <Link href="/" className="button button--black">
          <span>Back</span>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
