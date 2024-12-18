// React tools
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
// Components
import Root from "./compoenents/Root";
const Products = lazy(() => import("./compoenents/Products/Products"));
const About = lazy(() => import("./compoenents/About/About"));
const ProductDetails = lazy(() =>
  import("./compoenents/ProductDetails/ProductDetails")
);
const Checkout = lazy(() => import("./compoenents/Checkout/Checkout"));
import ErrorPage from "./compoenents/ErrorPage/ErrorPage";
// Loader
import { loader } from "./compoenents/ProductDetails/ProductDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <Products />
            </Suspense>
          ),
        },
        {
          path: "about",
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "product/:id",
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <ProductDetails />
            </Suspense>
          ),
          loader: loader,
        },
        {
          path: "checkout",
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <Checkout />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
