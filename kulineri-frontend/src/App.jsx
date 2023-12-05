import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Cart from "./pages/Cart";
import DetailProduct from "./pages/DetailProduct";
import Checkout from "./pages/Checkout";
import DetailOrder from "./pages/DetailOrder";
import Login from "./pages/login";
import Register from "./pages/register";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home";
import Error from "./pages/404";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<DetailProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order" element={<DetailOrder />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
