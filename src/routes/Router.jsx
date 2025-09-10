import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import Layout from "../components/Layout";

export const Element = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      children: [
         {
            index: true,
            element: <Home />,
         },
         {
            path: "products/:productId",
            element: <ProductDetail />,
         },
         {
            path: "cart",
            element: <Cart />,
         }

      ],
   },
]);