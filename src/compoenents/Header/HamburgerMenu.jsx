import { useDispatch, useSelector } from "react-redux";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { uiActions } from "../../store/ui-slice";
import logo from "../../assets/logo.png";

export default function HamburgerMenu() {
  const dispatch = useDispatch();

  const isHamburgerVisible = useSelector(
    (state) => state.ui.isHamburgerVisible
  );

  function toggleHumburgerMenu() {
    dispatch(uiActions.toggleHambruger());
  }

  return (
    <>
      <Link to="/" className="logo-res">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <div className="hamburger-menu" onClick={toggleHumburgerMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`dropdown ${isHamburgerVisible ? "show" : ""}`}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <Link to="checkout">
              <button className="cart-hamburger-btn">Cart (0)</button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
