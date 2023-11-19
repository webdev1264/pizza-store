import { createContext, useState } from "react";

export const CategoryContext = createContext();

const CategoryContextProvider = ({ children }) => {
  const [categoryIndex, setCategoryIndex] = useState(0);

  return (
    <CategoryContext.Provider value={{ categoryIndex, setCategoryIndex }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
