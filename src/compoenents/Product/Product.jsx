import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import "./Product.css";

export default function Product({ meal }) {
  const { id, name, price, description, img } = meal;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addProduct({
        newMeal: { id, name, price, description },
      })
    );
  };

  return (
    <div className="product" key={id}>
      <img src={img} alt="mealIMG" />
      <Link className="meal-details-link" to={`product/${id}`}>
        <h2 className="product-title">{name}</h2>
      </Link>
      <p className="product-price">{price.toFixed(2)}$</p>
      <p className="product-desc">{description}</p>
      <button className="product-btn main-btn" onClick={addToCart}>
        Add
      </button>
    </div>
  );
}
