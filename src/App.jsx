// Components
import Root from "./compoenents/Root";
import About from "./compoenents/About/About";
import Products from "./compoenents/Products/Products";
import ProductDetails from "./compoenents/ProductDetails/ProductDetails";
import Checkout from "./compoenents/Checkout/Checkout";
// React tools
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Loaders
import { mealLoader } from "./compoenents/ProductDetails/ProductDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Products /> },
        { path: "about", element: <About /> },
        {
          path: "product/:id",
          element: <ProductDetails />,
          loader: mealLoader,
        },
        { path: "checkout", element: <Checkout /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
