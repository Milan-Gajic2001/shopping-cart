import { json, useLoaderData } from "react-router-dom";
import MEALS from "../../meals";
import "./ProductDetails.css";

export default function ProductDetails() {
  const meal = useLoaderData();
  return (
    <div className="meal-details">
      <img className="meals-img" src={meal.img} alt="meal-img" />
      <div className="details">
        <h1>{meal.name}</h1>
        <p className="meal-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ea
          veniam laudantium saepe veritatis adipisci soluta quos eveniet aperiam
          molestiae eos consequatur sunt suscipit, nesciunt fugiat voluptates
          corporis deserunt, numquam voluptatem odit ratione repudiandae quidem!
          Deserunt repellendus ut nesciunt vel, quae nisi animi reiciendis
          veniam quod rerum et iusto velit, culpa alias molestiae hic!
          Distinctio voluptate placeat magni temporibus odio earum quia itaque,
          iure repudiandae ut et errmeal
        </p>
      </div>
    </div>
  );
}

export function loader({ request, params }) {
  const meal = MEALS[params.id - 1];
  if (!meal) {
    throw json({ message: "Could not find a meal" }, { status: 500 });
  }
  return meal;
}
