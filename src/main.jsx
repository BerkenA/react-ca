import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import CheckOutPage from './pages/CheckoutPage'
import HomePage from './pages/HomePage'
import CheckOutSucces from './pages/CheckoutSuccesPage'
import ContactPage from './pages/ContactPage'
import ProductPage from './pages/ProductPage'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* test om navbar komponenten kan legges in her */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/product" element={<ProductPage/>}/>
        <Route path="/checkout" element={<CheckOutPage/>}/>
        <Route path="/checkoutsucces" element={<CheckOutSucces/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </BrowserRouter>
    {/* test om footer komponenten kan legges inn her */}
  </StrictMode>,
)
