import "./Header.css";
import img from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { NavLink } from "react-router-dom";

export default function Header() {
  const nav = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
  ];

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);

  const toggleModal = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <header>
      <nav>
        <ul className="nav-list">
          <NavLink to="/">
            <img className="logo" src={img} alt="logo" />
          </NavLink>
          {nav.map((el) => (
            <li key={el}>
              <NavLink to={el.route}>{el.name}</NavLink>
            </li>
          ))}
        </ul>
        <button className="cart-btn main-btn" onClick={toggleModal}>
          Cart ({cart.length})
        </button>
      </nav>
    </header>
  );
}
