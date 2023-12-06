import { useDispatch, useSelector } from "react-redux";

import { selectFilter, setCategoryId } from "../redux/slices/filterSlice";

const Categories = () => {
  const { categoryId } = useSelector(selectFilter);

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
