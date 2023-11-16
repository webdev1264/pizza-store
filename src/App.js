import { useEffect, useState } from "react";
import Header from "./components/Header";
import Sort from "./components/Sort";
import Categories from "./components/Categories";
import PizzaBlock from "./components/PizzaBlock";
import Skeleton from "./components/PizzaBlock/Skeleton";
import "./scss/app.scss";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://6556acbdbd4bcef8b6118adc.mockapi.io/api/items")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {isLoading
                ? [...Array(9)].map((_, i) => <Skeleton key={i} />)
                : items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
