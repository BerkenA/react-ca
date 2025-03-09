import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CheckOutPage from "./pages/CheckoutPage";
import CheckOutSuccesPage from "./pages/CheckoutSuccesPage";
import ContactPage from "./pages/ContactPage";
import ShoppingCart from './components/ShoppingCart'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/product",
        element: <ProductPage />, 
      },
      {
        path: "/checkout",
        element: <CheckOutPage />,  
      },
      {
        path: "/checkoutsucces",
        element: <CheckOutSuccesPage />, 
      },
      {
        path: "/contact",
        element: <ContactPage />, 
      },
      {
        path: "/shoppingcart",
        element: <ShoppingCart />, 
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);


