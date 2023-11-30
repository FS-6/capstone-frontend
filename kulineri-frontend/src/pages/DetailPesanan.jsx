import React from "react";

const DetailPesanan = () => {
  return (
    <div className="flex flex-wrap p-10 justify-center">
      <div className="basis-3/3 p-3">
        <h1 className="text-2xl font-bold pb-3 my-5">Detail Pesanan</h1>
        <div className="flex justify-between mb-3">
          <p>No. Invoice</p>
          <p>INV/101023/OD</p>
        </div>
        <div className="flex justify-between mb-3">
          <p>Tanggal Pembelian</p>
          <p>10 Oktober 2023, 20:00 Wib</p>
        </div>

        <h1 className="text-2xl font-bold mt-5 my-5">Detail Produk</h1>
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

        <div className="flex justify-between mb-3">
          <div className="flex">
            <h1 className="text-lg">Subtotal</h1>
          </div>
          <div className="flex">
            <h1 className="text-lg">Rp 100000</h1>
          </div>
        </div>

        
        <h1 className="text-2xl font-bold mt-5 my-5">Detail Pengiriman</h1>
        <div className="flex justify-between mb-3">
          <p>Ekspedisi</p>
          <p>JNE</p>
        </div>
        <div className="flex justify-between mb-3">
          <p>No. Resi</p>
          <p>012312010123</p>
        </div>
        <div className="flex justify-between mb-3">
        <p className="w-1/6">Alamat</p>
          <p className="w-3/6 ml-10 text-right">

            Jalan Bunga Mawar No.111 RT00/RW00 Kel. Jatimerak, Kec. Pondok
            Terong, Kota Jakarta Barat, DKI Jakarta 11119
          </p>
        </div>

        <h1 className="text-2xl font-bold mt-5 my-5">Rincian Pembayaran</h1>
        <div className="flex justify-between mb-3">
          <p>Total Harga</p>
          <p>Rp 50.000</p>
        </div>
        <div className="flex justify-between mb-3">
          <p>Ongkos Kirim</p>
          <p>Rp 10.000</p>
        </div>
        <div className="flex justify-between mb-3">
          <p>Total Diskon</p>
          <p>Rp 0</p>
        </div>
        <div className="flex justify-between mb-3">
          <p className="font-semibold">Total Belanja</p>
          <p className="font-semibold">Rp 500.000</p>
        </div>

        <div className="text-right mt-10">
        <button className="py-2 px-10 rounded-md font-semibold bg-red-600 text-white">
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPesanan;
