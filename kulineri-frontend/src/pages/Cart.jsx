import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allCart } from "../redux/reducer/cart";
import { getProductDetail } from "../../services/product.service";

const Cart = () => {
  const [counterJumlah, setCounterJumlah] = useState(1);
  const [productCart, setProductCart] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await dispatch(allCart());
  //       setProductCart(data.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [dispatch]);

  const thisData = async () => {
    try {
      const data = await dispatch(allCart());
      return data.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  const fetchData = async () => {
    try {
      const data = await thisData();
      if (data) {
        const productData = await getProductDetail(data.product);
        setProductCart(productData);
        setIsLoading(false);
        console.log(productData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(productCart);
  }, [productCart]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  // useEffect(() => {
  //   const wrapper = setTimeout(() => {
  //     if (productCart == null) {
  //       getProductDetail(cartItems.id).then((data) => {
  //         setProductCart(data.data);
  //       });
  //     }
  //   }, 0);
  //   return () => clearTimeout(wrapper);
  // }, []);

  // console.log(cartItems?.data?._id)

  return (
    <div className="flex flex-col md:flex-wrap justify-between px-5 md:px-20 py-5 md:py-10 mx-auto">
      <h3 className="font-bold text-lg md:text-xl lg:text-2xl">Keranjang</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:p-3 gap-5 lg:gap-7">
        <div className="mt-5">
          <div className="flex">
            <input
              className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 mr-3"
              type="checkbox"
              name="pilihproduk"
              id="pilihproduk"
            />
            <p className="text-xs md:text-sm lg:text-base">Pilih semua</p>
          </div>
          <hr className="my-4" />
          <div>
            <div className="flex">
              <input
                className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 mr-3"
                type="checkbox"
                name="pilihproduk"
                id="pilihproduk"
              />
              <img
                className="mx-3"
                src="../../src/assets/product/img1.png"
                alt=""
              />
              <div>
                <p className="text-xs md:text-sm lg:text-base">
                  Pie Susu Bali (isi 20 pcs)
                </p>
                <p className="font-semibold text-xs md:text-sm lg:text-base">
                  Rp. 55000
                </p>
              </div>
            </div>
            <div className="flex text-right">
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
              ></link>
              <button className="mr-2 text-red-600">
                <i className="fas fa-trash"></i>
              </button>
              {counterJumlah === 1 ? (
                <button
                  className="border w-5 h-5 lg:w-7 lg:h-7 rounded-full mx-2 text-gray-300 text-xs md:text-sm lg:text-base"
                  disabled
                >
                  -
                </button>
              ) : (
                <button
                  className="border w-5 h-5 lg:w-7 lg:h-7 rounded-full mx-2 text-xs md:text-sm lg:text-base"
                  onClick={() => setCounterJumlah(counterJumlah - 1)}
                >
                  -
                </button>
              )}
              <p className="text-xs md:text-sm lg:text-base">{counterJumlah}</p>
              <button
                className="border w-5 h-5 lg:w-7 lg:h-7 rounded-full ml-2 text-xs md:text-sm lg:text-base"
                onClick={() => setCounterJumlah(counterJumlah + 1)}
              >
                +
              </button>
            </div>
            <hr className="my-4"></hr>
          </div>
        </div>

        <div className="border p-3 lg:p-5 rounded-md mt-5 max-w-lg">
          <p className="mb-2 font-bold text-sm md:text-lg lg:text-xl">
            Ringkasan Belanja
          </p>
          <div className="flex justify-between mb-2">
            <p className="text-xs md:text-sm lg:text-base">Subtotal</p>
            <p className="text-xs md:text-sm lg:text-base">Rp. 0</p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-xs md:text-sm lg:text-base">Total Diskon</p>
            <p className="text-xs md:text-sm lg:text-base">- Rp. 0</p>
          </div>
          <hr></hr>
          <strong>
            <p className="text-sm lg:text-lg my-3 text-right">Rp. 0</p>
          </strong>
          <Link to={`/checkout`}>
            <button className="p-2 w-full rounded-md font-semibold text-sm md:text-lg lg:text-xl bg-red-600 text-white">
              Beli Sekarang
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
