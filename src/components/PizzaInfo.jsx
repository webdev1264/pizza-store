import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const PizzaInfo = () => {
  const [item, setItem] = useState();
  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(
          `https://6556acbdbd4bcef8b6118adc.mockapi.io/api/items/${params.id}`,
        );
        if (resp.data) {
          setItem(resp.data);
        }
      } catch (e) {
        console.log(e);
        alert("Not found");
        navigate("/");
      }
    };
    fetchData();
  }, [navigate, params.id]);

  const pizzaInfo = () => {
    return (
      <>
        <img src={item.imageUrl} alt={item.title} />
        <h2>Название: {item.title}</h2>
        <h2>Цена: {item.price}</h2>
      </>
    );
  };

  return (
    <div className="container">
      <h1>PizzaInfo</h1>
      {item ? pizzaInfo() : <h2>Загрузка...</h2>}
    </div>
  );
};

export default PizzaInfo;
