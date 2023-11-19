const Categories = ({ categoryId, categoryIdChange }) => {
  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li
            key={i}
            className={categoryId === i ? "active" : ""}
            onClick={() => categoryIdChange(i)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
