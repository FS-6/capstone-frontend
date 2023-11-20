import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav/NavBar';

const Home = lazy(() => import('./components/Home/Home'));
const Products = lazy(() => import('./components/Products/Products'));
const DetailProduct = lazy(() => import('./components/DetailProduct/DetailProduct'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/detailproduct/:id" element={<DetailProduct />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App