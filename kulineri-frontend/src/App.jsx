import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav/NavBar';

const Home = lazy(() => import('./components/Home/Home'));
const Products = lazy(() => import('./components/Products/Products'));
const DetailProduct = lazy(() => import('./components/DetailProduct/DetailProduct'));
const Cart = lazy(() => import('./components/Cart/Cart'));
const Checkout = lazy(() => import('./components/Checkout/Checkout'));
const DetailPesanan = lazy(() => import('./components/DetailPesanan/DetailPesanan'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/productdetail/:id" element={<DetailProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/detailpesanan" element={<DetailPesanan />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App