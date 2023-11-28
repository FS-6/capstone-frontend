import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from 'react';
import Login from "./pages/login";
import LandingPage from "./pages/landingpage";
import Register from "./pages/register";
import Home from "./pages/home";
import Settings from "./pages/profilesettings";
const DetailProduct = lazy(() => import('./components/DetailProduct/DetailProduct'));
const Cart = lazy(() => import('./components/Cart/Cart'));
const Checkout = lazy(() => import('./components/Checkout/Checkout'));
const DetailPesanan = lazy(() => import('./components/DetailPesanan/DetailPesanan'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="profilesettings" element={<Settings />} />
        <Route path="/products/productdetail/:id" element={<DetailProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/detailpesanan" element={<DetailPesanan />} />
      </Routes>
    </Suspense>
    </Router>
  );
}
export default App