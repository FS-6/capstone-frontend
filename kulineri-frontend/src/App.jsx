import { Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/login";
import LandingPage from "./pages/landingpage";
import Register from "./pages/register";
import Home from "./pages/home";
import Settings from "./pages/profilesettings";
import Error from "./pages/404";
import DetailProduct from "./pages/DetailProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import DetailPesanan from "./pages/DetailPesanan";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="profilesettings" element={<Settings />} />
      <Route path="/productdetail/:id" element={<DetailProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/detailpesanan" element={<DetailPesanan />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
export default App