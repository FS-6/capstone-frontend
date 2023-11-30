import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap justify-between px-5 md:px-20 py-5 md:py-10 mx-auto">
      <h3 className="pb-3 font-bold text-lg md:text-xl lg:text-2xl">
        Checkout
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:p-3 gap-5 lg:gap-7">
        <div className="">
          <h1 className="mb-3 font-semibold text-sm md:text-lg lg:text-xl">
            Alamat Pengiriman
          </h1>
          <div>
            <div className="flex border p-3 lg:p-5 rounded-md mb-5">
              <div>
                <h1 className="font-bold text-xs md:text-sm lg:text-base">
                  Mr. Joko
                </h1>
                <p className="text-xs md:text-sm lg:text-base">0812019919190</p>
                <p className="text-xs md:text-sm lg:text-base">
                  Jalan Bunga Mawar No.111 RT00/RW00 Kel. Jatimerak, Kec. Pondok
                  Terong, Kota Jakarta Barat, DKI Jakarta 11119
                </p>
              </div>
              <div className="flex ml-5 items-center">
                <button className="border rounded-md py-1 px-2 md:py-2 md:px-3 lg:py-3 lg:px-5 font-semibold text-xs md:text-sm lg:text-base text-center">
                  Ubah
                </button>
              </div>
            </div>

            <div>
              <h1 className="mb-3 font-semibold text-sm md:text-lg lg:text-xl">
                Produk yang Dibeli
              </h1>
              <hr className="my-3 border lg:border-2" />
              <div className="flex my-3 justify-between">
                <div className="flex">
                  <img
                    className="mx-3"
                    src="../../src/assets/product/img1.png"
                    alt=""
                  />
                  <div>
                    <p className="text-xs md:text-sm lg:text-base">
                      Pie Susu Bali (isi 20 pcs)
                    </p>
                    <p className="text-xs md:text-sm lg:text-base">Original</p>
                    <p className="font-semibold text-xs md:text-sm lg:text-base">
                      Rp 55.000
                    </p>
                  </div>
                </div>

                <div className="text-right text-xs md:text-sm lg:text-base">
                  <p>2x</p>
                </div>
              </div>
              <hr className="my-2" />

              <div className="flex justify-between">
                <div>
                  <h1 className="font-semibold text-sm md:text-lg lg:text-xl">
                    Subtotal
                  </h1>
                </div>
                <div>
                  <h1 className="font-bold text-sm md:text-lg lg:text-xl">
                    Rp 100000
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 max-w-md">
          <div className="border p-3 rounded">
            <p className="mb-3 font-semibold text-sm md:text-lg lg:text-xl">
              Pilih jenis pengiriman
            </p>
            <select
              className="border w-full rounded-md p-2 text-xs md:text-sm lg:text-base"
              name="pengiriman"
            >
              <option className="text-xs md:text-sm lg:text-base" value="COD">
                COD
              </option>
              <option
                className="text-xs md:text-sm lg:text-base"
                value="Instant"
              >
                Instant
              </option>
              <option
                className="text-xs md:text-sm lg:text-base"
                value="Sameday"
              >
                Sameday
              </option>
            </select>
          </div>

          <div className="border p-3 lg:p-5 rounded-md mt-5">
            <div className="flex w-full rounded-md justify-between mb-5">
              <input
                className="border p-2 rounded-md w-full mr-1 text-xs md:text-sm lg:text-base"
                type="text"
                placeholder="Masukkan Kode Kupon"
              />
              <button className="border p-2 lg:px-5 rounded-md font-semibold text-xs md:text-sm lg:text-base text-white bg-slate-900">
                Pakai
              </button>
            </div>

            <p className="mb-2 font-bold text-sm md:text-lg lg:text-xl">
              Ringkasan Belanja
            </p>
            <div className="flex justify-between mb-2">
              <p className="text-xs md:text-sm lg:text-base">Total Harga</p>
              <p className="text-xs md:text-sm lg:text-base">Rp. 0</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-xs md:text-sm lg:text-base">
                Total Ongkos Kirim
              </p>
              <p className="text-xs md:text-sm lg:text-base">Rp. 0</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-xs md:text-sm lg:text-base">Total Diskon</p>
              <p className="text-xs md:text-sm lg:text-base">- Rp. 0</p>
            </div>
            <hr></hr>
            <strong>
              <p className="text-xs md:text-sm lg:text-lg my-3 text-right">
                Rp. 0
              </p>
            </strong>

            <Link to={`/detailpesanan`}>
              <button className="p-2 w-full rounded-md font-semibold text-sm md:text-lg lg:text-xl bg-red-600 text-white">
                Pilih Pembayaran
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
