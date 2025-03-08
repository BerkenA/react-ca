import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import CheckOutPage from './pages/CheckoutPage'
import HomePage from './pages/HomePage'
import CheckOutSucces from './pages/CheckoutSuccesPage'
import ContactPage from './pages/ContactPage'
import ProductPage from './pages/ProductPage'
import Layout from './components/Layout'
import ShoppingCart from './components/ShoppingCart'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/product" element={<ProductPage/>}/>
          <Route path="/checkout" element={<CheckOutPage/>}/>
          <Route path="/checkoutsucces" element={<CheckOutSucces/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/shoppingcart" element={<ShoppingCart/>}/>
        </Routes>
      </BrowserRouter>
    <Layout/>
  </StrictMode>,
)
