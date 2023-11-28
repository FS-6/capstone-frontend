import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="flex flex-wrap p-10 gap-2 justify-center">
      <div className="basis-3/6 p-3 mr-5">
        <h3 className="text-2xl font-bold pb-3">Checkout</h3>
        <h1 className="mb-3 font-semibold">Alamat Pengiriman</h1>
        <div className="flex border p-5 rounded-md mb-5">
          <div>
            <h1 className="font-bold">Mr. Joko</h1>
            <p>0812019919190</p>
            <p>
              Jalan Bunga Mawar No.111 RT00/RW00 Kel. Jatimerak, Kec. Pondok
              Terong, Kota Jakarta Barat, DKI Jakarta 11119
            </p>
          </div>
          <div className="flex ml-5 items-center">
            <button className="border rounded-md py-3 px-5 font-semibold text-center">
              Ubah
            </button>
          </div>
        </div>

        <h1 className="mb-3 font-semibold">Produk yang Dibeli</h1>
        <hr className="my-3 border-2" />
        <div className="flex my-3 justify-between">
          <div className="flex">
            <img
              className="mx-3"
              src="../../src/assets/product/img1.png"
              alt=""
            />
            <div>
              <p>Pie Susu Bali (isi 20 pcs)</p>
              <p>Original</p>
              <p className="font-semibold">Rp 55.000</p>
            </div>
          </div>

          <div className="text-right">
            <p>2x</p>
          </div>
        </div>
        <hr className="my-2" />

        <div className="flex justify-between">
          <div className="flex">
            <h1 className="text-lg font-bold">Subtotal</h1>
          </div>
          <div className="flex">
            <h1 className="text-lg font-bold">Rp 100000</h1>
          </div>
        </div>
      </div>

      <div className="basis-2/6 p-3 mt-20">
        <div className="border p-3 rounded">
          <p className="font-bold mb-3">Pilih jenis pengiriman</p>
          <select className="border w-full rounded-md p-2" name="pengiriman">
            <option value="COD">COD</option>
            <option value="Instant">Instant</option>
            <option value="Sameday">Sameday</option>
          </select>
        </div>

        <div className="border p-5 rounded-md mt-5">
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
          <p>Total Harga</p>
          <p>Rp. 0</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Total Ongkos Kirim</p>
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

        <Link to={`/detailpesanan`}>
        <button className="p-2 w-full rounded-md font-semibold bg-red-600 text-white">
            Pilih Pembayaran
          </button>
        </Link>
        
      </div>
        </div>
        
      </div>
  );
};

export default Checkout;
