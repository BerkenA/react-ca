import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CheckOutPage from "./pages/CheckoutPage";
import CheckOutSucces from "./pages/CheckoutSuccesPage";
import ContactPage from "./pages/ContactPage";
import ShoppingCart from "./components/ShoppingCart";
import Layout from "./components/Layout";

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/checkout" element={<CheckOutPage />} />
            <Route path="/checkoutsucces" element={<CheckOutSucces />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;

