import React, { useState } from "react";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

  const handleOnClickCategory = (i) => {
    setActiveIndex(i);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li
            key={i}
            className={activeIndex === i ? "active" : ""}
            onClick={() => handleOnClickCategory(i)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
