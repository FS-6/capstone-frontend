import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-xl font-semibold">My Store</Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/products" className="text-white hover:text-gray-300">Products</Link>
          </li>
          <li>
            <Link to="/cart" className="text-white hover:text-gray-300">Cart</Link>
          </li>
          <li>
            <Link to="/checkout" className="text-white hover:text-gray-300">Checkout</Link>
          </li>
          <li>
            <Link to="/detailpesanan" className="text-white hover:text-gray-300">Detail Pesanan</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
