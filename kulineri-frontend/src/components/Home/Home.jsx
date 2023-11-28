import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaStar, FaCartPlus } from "react-icons/fa";
import Footer from "../footer";
import Navlog from "../navlog";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const { data } = await axios.get(
      `https://lazy-shorts-fish.cyclic.app/products`
    );
    setProducts(data.data);
  };
  console.log(products);
  function formatCurrency(number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  }

  return (
    <>
      <Navlog />
      <main>
        <section className="max-w-7xl mx-auto mt-28 px-5">
          <img
            src="logo/kulineri-banner-promo.png"
            className="w-full"
            alt="kulineri-promo-banner"
          />
        </section>
        <section className="max-w-7xl mx-auto px-5 mt-14 mb-10 md:mb-24">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-medim md:text-lg lg:text-2xl font-semibold">
              Oleh Oleh Untuk Anda
            </h1>
          </div>
          <div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5"
            id="product-container"
          >
            {products.map((item) => (
              <div
                key={item._id}
                className="flex flex-col border rounded-md overflow-hidden hover:shadow-md duration-400"
              >
                <Link to={`products/productdetail/${item._id}`}>
                  <img src={item.image} alt="product-img" className="h-auto" />
                </Link>
                <div className="p-2">
                  <h1 className="text-md font-bold">{item.name}</h1>
                  <span className="text-xs text-slate-500 mb-2">
                    {item.from}
                  </span>
                  <p className="font-md font-semibold mb-2">
                    {formatCurrency(item.price)}
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="border-r-2 pr-2">
                      <FaStar className="text-yellow-500" />
                      <span>5.00</span>
                    </div>
                    <span>50 terjual</span>
                  </div>
                  <Link to="/cart" className="text-red-600 text-xl">
                    <FaCartPlus />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home