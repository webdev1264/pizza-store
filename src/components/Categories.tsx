import { useSelector } from "react-redux";

import { selectFilter, setCategoryId } from "../redux/slices/filterSlice";
import { useAppDispatch } from "../redux/store";
import { categories } from "../data/pizzaData";

const Categories: React.FC = () => {
  const { categoryId } = useSelector(selectFilter);

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

export default Categories;
