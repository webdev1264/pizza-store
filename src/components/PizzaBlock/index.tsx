import { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";

import { typeNames } from "../../data/pizzaData";
import { useAppDispatch } from "../../redux/store";
import { selectCart } from "../../redux/cart/selectors";
import { CartItem } from "../../redux/cart/types";
import { addToCart } from "../../redux/cart/slice";

type PizzaBlockProps = {
  id: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  imageUrl: string;
};

const PizzaBlock: React.FC<PizzaBlockProps> = ({ id, title, types, sizes, price, imageUrl }) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const cart = useSelector(selectCart);
  const dispatch = useAppDispatch();

  const itemInCart = cart.find(
    (item) =>
      item.id === id &&
      item.size === sizes[activeSize] &&
      String(item.type) === typeNames[activeType],
  );

  const handleOnAddItem = () => {
    const item = {
      id,
      title,
      price,
      size: sizes[activeSize],
      type: typeNames[activeType],
      imageUrl,
    } as CartItem;
    dispatch(addToCart(item));
  };

  return (
    <div className="pizza-block">
      <Link href={`/pizza/${id}`}>
        <Image
          className="pizza-block__image"
          src={imageUrl}
          alt={`Pizza ${title}`}
          width={260}
          height={260}
        />
      </Link>
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((typeId, i) => (
            <li
              key={typeId}
              className={activeType === i ? "active" : ""}
              onClick={() => setActiveType(i)}>
              {typeNames[typeId]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, i) => (
            <li
              key={size}
              className={activeSize === i ? "active" : ""}
              onClick={() => setActiveSize(i)}>
              {size} cm.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">from {price} $</div>
        <button className="button button--outline button--add" onClick={handleOnAddItem}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Add to cart</span>
          {itemInCart && <i>{itemInCart.count}</i>}
        </button>
      </div>
    </div>
  );
};

export default PizzaBlock;
