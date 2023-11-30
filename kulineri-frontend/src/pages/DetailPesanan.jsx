import React from "react";

const DetailPesanan = () => {
  return (
    <div className="flex flex-wrap p-5 md:p-10 justify-center">
      <div>
        <h1 className="font-bold text-sm mb-4 mt-2 md:text-lg lg:text-xl my-5">Detail Pesanan</h1>
        <div className="flex justify-between mb-3">
          <p className="text-xs pb-2 md:text-sm lg:text-base">No. Invoice</p>
          <p className="text-xs pb-2 md:text-sm lg:text-base">INV/101023/OD</p>
        </div>
        <div className="flex justify-between mb-3">
          <p className="text-xs pb-2 md:text-sm lg:text-base">Tanggal Pembelian</p>
          <p className="text-xs pb-2 md:text-sm lg:text-base">10 Oktober 2023, 20:00 Wib</p>
        </div>

        <h1 className="font-bold text-sm mb-4 mt-2 md:text-lg lg:text-xl">Detail Produk</h1>
        <hr className="my-3 border-1 lg:border-2" />
        <div className="flex my-3 justify-between">
          <div className="flex">
            <img
              className="mx-3"
              src="../../src/assets/product/img1.png"
              alt=""
            />
            <div>
              <p className="text-xs pb-2 md:text-sm lg:text-base">Pie Susu Bali (isi 20 pcs)</p>
              <p className="text-xs pb-2 md:text-sm lg:text-base">Original</p>
              <p className="font-semibold text-xs pb-2 md:text-sm lg:text-base">Rp 55.000</p>
            </div>
          </div>

          

          <div className="text-right">
            <p>2x</p>
          </div>
        </div>
        <hr className="my-2" />

        <div className="flex justify-between mb-3">
          <div className="flex">
            <h1 className="pb-2 text-sm md:text-base lg:text-lg">Subtotal</h1>
          </div>
          <div className="flex">
            <h1 className="pb-2 text-sm md:text-base lg:text-lg">Rp 100000</h1>
          </div>
        </div>

        
        <h1 className="font-bold text-sm mb-4 mt-2 md:text-lg lg:text-xl">Detail Pengiriman</h1>
        <div className="flex justify-between mb-3">
          <p className="text-xs pb-2 md:text-sm lg:text-base">Ekspedisi</p>
          <p className="text-xs pb-2 md:text-sm lg:text-base">JNE</p>
        </div>
        <div className="flex justify-between mb-3">
          <p className="text-xs pb-2 md:text-sm lg:text-base">No. Resi</p>
          <p className="text-xs pb-2 md:text-sm lg:text-base">012312010123</p>
        </div>
        <div className="flex justify-between mb-3">
        <p className="text-xs pb-2 md:text-sm lg:text-base w-1/6">Alamat</p>
          <p className="text-xs pb-2 md:text-sm lg:text-base w-3/6 ml-10 text-right">

            Jalan Bunga Mawar No.111 RT00/RW00 Kel. Jatimerak, Kec. Pondok
            Terong, Kota Jakarta Barat, DKI Jakarta 11119
          </p>
        </div>

        <h1 className="font-bold text-sm mb-4 mt-2 md:text-lg lg:text-xl">Rincian Pembayaran</h1>
        <div className="flex justify-between mb-3">
          <p className="text-xs pb-2 md:text-sm lg:text-base">Total Harga</p>
          <p className="text-xs pb-2 md:text-sm lg:text-base">Rp 50.000</p>
        </div>
        <div className="flex justify-between mb-3">
          <p className="text-xs pb-2 md:text-sm lg:text-base">Ongkos Kirim</p>
          <p className="text-xs pb-2 md:text-sm lg:text-base">Rp 10.000</p>
        </div>
        <div className="flex justify-between mb-3">
          <p className="text-xs pb-2 md:text-sm lg:text-base">Total Diskon</p>
          <p className="text-xs pb-2 md:text-sm lg:text-base">Rp 0</p>
        </div>
        <div className="flex justify-between mb-3">
          <p className="font-semibold text-xs pb-2 md:text-sm lg:text-base">Total Belanja</p>
          <p className="font-semibold text-xs pb-2 md:text-sm lg:text-base">Rp 500.000</p>
        </div>

        <div className="text-right mt-10">
        <button className="py-2 px-10 rounded-md font-semibold text-xs pb-2 md:text-sm lg:text-base bg-red-600 text-white">
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPesanan;
