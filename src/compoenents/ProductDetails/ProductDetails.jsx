import { useLoaderData } from "react-router-dom";
import MEALS from "../../meals";
import "./ProductDetails.css";

export default function ProductDetails() {
  const meal = useLoaderData();

  return (
    <div className="meal-details">
      <h1>{meal.name}</h1>
      <img className="details-img" src={meal.img} alt="meal-img" />
      <p>- {meal.description}</p>
    </div>
  );
}

export function mealLoader({ request, params }) {
  const meal = MEALS[params.id - 1];
  return meal;
}
