import { memo } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../redux/store";
import { categories } from "../data/pizzaData";
import { selectCategoryId } from "../redux/filter/selectors";
import { setCategoryId } from "../redux/filter/slice";

const Categories: React.FC = () => {
  const categoryId = useSelector(selectCategoryId);

  const dispatch = useAppDispatch();
  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li
            key={i}
            className={categoryId === i ? "active" : ""}
            onClick={() => dispatch(setCategoryId(i))}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(Categories);
