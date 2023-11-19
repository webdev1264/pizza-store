import { useDispatch } from "react-redux";

import { setCategoryId, useFilter } from "../redux/slices/filterSlice";

const Categories = () => {
  const { categoryId } = useFilter();

  const dispatch = useDispatch();

  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

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
