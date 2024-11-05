import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { useEffect, useRef } from "react";
import { uiActions } from "../../store/ui-slice";
import { cartActions } from "../../store/cart-slice";
import { Link } from "react-router-dom";

export default function Cart() {
  // States from redux store
  const cart = useSelector((state) => state.cart.cart);
  const isVisible = useSelector((state) => state.ui.isVisible);

  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, curr) => acc + curr.totalPrice, 0);

  const dialog = useRef();

  useEffect(() => {
    if (isVisible) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [isVisible]);

  function escKey(e) {
    console.log(e.key);
    if (e.key === "Escape") {
      dispatch(uiActions.toggle());
      dialog.current.close();
    }
  }

  function closeModal() {
    dispatch(uiActions.toggle());
    dialog.current.close();
  }

  function changeItemQuantity(id, action) {
    if (action === "-") {
      dispatch(cartActions.reduceMealQuantity({ id: id }));
    } else {
      dispatch(cartActions.addMealQuantity({ id: id }));
    }
  }

  return (
    <dialog ref={dialog} onKeyDown={escKey}>
      <h1>{cart.length === 0 ? "Your cart is empty" : "Your cart"}</h1>
      <ul className="cart-list">
        {cart.map((meal, i) => {
          return (
            <li>
              <div className="cart-item-info">
                <p>
                  {`${i + 1}. ${meal.name} (${meal.price}$) x ${
                    meal.quantity
                  }  = ${meal.totalPrice.toFixed(2)}$`}
                </p>
              </div>
              <div className="cart-item-actions">
                <button
                  className="action-cart-item-btn"
                  onClick={() => changeItemQuantity(meal.id, "-")}
                >
                  -
                </button>
                <button
                  className="action-cart-item-btn"
                  onClick={() => changeItemQuantity(meal.id, "+")}
                >
                  +
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="total-price">Total:{totalPrice.toFixed(2)}$</p>
      <div className="modal-actions">
        <Link to={"checkout"}>
          <button className="checkout-btn" onClick={closeModal}>
            Go to checkout
          </button>
        </Link>
        <button className="close-modal-btn" onClick={closeModal}>
          Close
        </button>
      </div>
    </dialog>
  );
}
