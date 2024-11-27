import { useDispatch, useSelector } from "react-redux";
import "./Checkout.css";
import { Link, useNavigate } from "react-router-dom";
import { cartActions } from "../../store/cart-slice";
import { orderActions } from "../../store/orders-slice";

export default function Checkout() {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.totalPrice, 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addOrder = () => {
    if (cart.length === 0) {
      return;
    }
    console.log("AA");
    const order = {
      orderID: Math.random(),
      meals: cart,
      totalPrice,
    };
    dispatch(orderActions.addOrder({ order: order }));
    dispatch(cartActions.emptyCart());
    navigate("/");
  };
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <ul className="checkout-list">
        {cart.map((item, i) => {
          return (
            <li className="checkout-item">
              <p>
                {`${i + 1}. ${item.name} x${
                  item.quantity
                }  = ${item.totalPrice.toFixed(2)}$`}
              </p>
            </li>
          );
        })}
      </ul>
      <hr />
      <h3 className="checkout-total-price">
        Total price:{totalPrice.toFixed(2)}$
      </h3>
      <div className="checkout-actions">
        <button className="order-btn" onClick={addOrder}>
          Complete order
        </button>
        <Link to={"/"}>
          <button className="go-back-btn">Go back</button>
        </Link>
      </div>
    </div>
  );
}
