import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Cart from "./Cart/Cart";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Root() {
  const isVisible = useSelector((state) => state.ui.isVisible);
  return (
    <>
      {isVisible && <Cart />}
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
