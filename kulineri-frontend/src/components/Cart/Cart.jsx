import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [counterJumlah, setCounterJumlah] = useState(1);

  return (
    <div className="flex flex-wrap p-10 gap-2 justify-center">
      <div className="basis-3/6 p-3">
        <h3 className="text-2xl font-bold pb-3 mb-5">Keranjang</h3>
        <div>
          <input
            className="w-5 h-5 mr-3"
            type="checkbox"
            name="pilihproduk"
            id="pilihproduk"
          />
          Pilih semua
          <hr className="my-4"></hr>
          <div>
            <div className="flex">
              <input
                className="w-5 mr-3"
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
                <p>Pie Susu Bali (isi 20 pcs)</p>
                <p>Original</p>
                <p className="font-semibold">Rp. 55000</p>
              </div>
            </div>
            <div className="text-right">
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
              ></link>
              <button className="mr-2 text-red-600">
                <i className="fas fa-trash"></i>
              </button>
              {counterJumlah === 1 ? (
                <button
                  className="border px-2 rounded-full mx-2 text-gray-300"
                  disabled
                >
                  -
                </button>
              ) : (
                <button
                  className="border px-2 rounded-full mx-2"
                  onClick={() => setCounterJumlah(counterJumlah - 1)}
                >
                  -
                </button>
              )}
              {counterJumlah}
              <button
                className="border px-2 rounded-full ml-2"
                onClick={() => setCounterJumlah(counterJumlah + 1)}
              >
                +
              </button>
            </div>
            <hr className="my-4"></hr>
          </div>
        </div>
      </div>

      <div className="basis-2/6 border p-5 rounded-md mt-16 ml-5">
        <div className="flex w-full rounded-md justify-between mb-5">
          <input
            className="border p-2 rounded-md w-full mr-1"
            type="text"
            placeholder="Masukkan Kode Kupon"
          />
          <button className="border p-2 rounded-md font-semibold text-white bg-black">Pakai</button>
        </div>

        <p className="text-xl mb-4 font-bold">Ringkasan Belanja</p>
        <div className="flex justify-between mb-2">
          <p>Subtotal</p>
          <p>Rp. 0</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Total Diskon</p>
          <p>- Rp. 0</p>
        </div>
        <hr></hr>
        <strong>
          <p className="text-lg my-3 text-right">Rp. 0</p>
        </strong>
        <Link to={`/checkout`}>
          <button className="p-2 w-full rounded-md font-semibold bg-red-600 text-white">
            Beli Sekarang
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
