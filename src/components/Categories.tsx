import { useSelector } from "react-redux";

import { selectCategoryId, setCategoryId } from "../redux/slices/filterSlice";
import { useAppDispatch } from "../redux/store";
import { categories } from "../data/pizzaData";
import { memo } from "react";

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
