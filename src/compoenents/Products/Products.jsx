import "./Products.css";
import Product from "../Product/Product";
import MEALS from "../../meals";
import { useState, useEffect } from "react";

export default function Products() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    setMeals(MEALS);
  }, []);

  return (
    <div className="product-list">
      {meals.map((meal) => (
        <Product key={meal.id} meal={meal} />
      ))}
    </div>
  );
}
