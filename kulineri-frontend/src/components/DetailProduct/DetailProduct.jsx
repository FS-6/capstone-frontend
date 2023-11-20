import React, { useState } from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Bakpia Kukus Tugu Jogja",
    city: "Yogyakarta",
    price: 55000,
    rating: 4.8,
    stok: 80,
    description:
      "Pie susu atau pastei susu adalah sebuah hidangan penutup tradisional Indonesia yang terbuat dari kue pastri yang diisi dengan kustar telur serta susu kental manis. Pastri tersebut sangat datar dengan isian hanya terdiri dari satu lapisan kustar yang sangat tipis. Asal pastri tersebut berasal dari Bali. Tahan 6 hari di suhu ruang. Tahan 10 hari di kulkas.",
  },
  {
    id: 2,
    name: "Bakpia Kukus Tugu Jogja",
    city: "Yogyakarta",
    price: 55000,
    rating: 4.8,
    description:
      "Pie susu atau pastei susu adalah sebuah hidangan penutup tradisional Indonesia yang terbuat dari kue pastri yang diisi dengan kustar telur serta susu kental manis. Pastri tersebut sangat datar dengan isian hanya terdiri dari satu lapisan kustar yang sangat tipis. Asal pastri tersebut berasal dari Bali. Tahan 6 hari di suhu ruang. Tahan 10 hari di kulkas.",
  },
  {
    id: 3,
    name: "Bakpia Kukus Tugu Jogja",
    city: "Yogyakarta",
    price: 55000,
    rating: 4.8,
    description:
      "Pie susu atau pastei susu adalah sebuah hidangan penutup tradisional Indonesia yang terbuat dari kue pastri yang diisi dengan kustar telur serta susu kental manis. Pastri tersebut sangat datar dengan isian hanya terdiri dari satu lapisan kustar yang sangat tipis. Asal pastri tersebut berasal dari Bali. Tahan 6 hari di suhu ruang. Tahan 10 hari di kulkas.",
  },
  {
    id: 4,
    name: "Bakpia Kukus Tugu Jogja",
    city: "Yogyakarta",
    price: 55000,
    rating: 4.8,
    description:
      "Pie susu atau pastei susu adalah sebuah hidangan penutup tradisional Indonesia yang terbuat dari kue pastri yang diisi dengan kustar telur serta susu kental manis. Pastri tersebut sangat datar dengan isian hanya terdiri dari satu lapisan kustar yang sangat tipis. Asal pastri tersebut berasal dari Bali. Tahan 6 hari di suhu ruang. Tahan 10 hari di kulkas.",
  },
];

const DetailProduct = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = products.find((item) => item.id === productId);
  const [counterJumlah, setCounterJumlah] = useState(1);
  const [varianProduk, setVarianProduk] = useState({
    id: 1,
    nama: "Original",
    price: 0,
  });  

  const varian = [
    {
      id: 1,
      nama: "Original",
      price: 0,
    },
    {
      id: 2,
      nama: "Coklat",
      price: 3000,
    },
    {
      id: 3,
      nama: "Keju",
      price: 5000,
    },
  ];

  const handleVarian = (data) => {
    setVarianProduk(data);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container detail-produk mt-2">
      <h3 className="detail-produk1">Detail Produk</h3>
      <div className="grid grid-cols-3 gap-4">
        <React.Fragment key={product.id}>
          <div className="mt-2">
            <div className="rectangle-parent">
              <img
                className="w-full"
                alt={`img${id}.png`}
                src={`../../src/assets/product/img1.png`}
              />
            </div>
          </div>
          <div>
            <div className="group-parent">
              <div className="pie-susu-bali-isi-20-pcs-parent">
                <div className="pie-susu-bali">
                  <strong>
                    <span className="text-2xl font-bold">{product.name}</span>
                  </strong>
                </div>
                <p className="text-gray-700">{product.city}</p>
                <p className="text-gray-700">{product.rating}</p>
                <p className="text-gray-600 mb-2">Rp {product.price}</p>
                <hr></hr>
                <p>Pilih varian :</p>
                <div>
                  {varian.map((data) => (
                    <button
                      key={data.id}
                      onClick={() => handleVarian(data)}
                      className={`ml-2 p-2 border border-black ${
                        varianProduk.id === data.id
                          ? "bg-gray-500"
                          : "bg-gray-800"
                      }`}
                    >
                      {data.nama}
                    </button>
                  ))}
                </div>
                <p>Jumlah stok : {product.stok}</p>
                <p>Jumlah pesanan :</p>
                <div className="flex">
                  {counterJumlah === 1 ? (
                    <button disabled>-</button>
                  ) : (
                    <button onClick={() => setCounterJumlah(counterJumlah - 1)}>
                      -
                    </button>
                  )}
                  {counterJumlah}
                  <button onClick={() => setCounterJumlah(counterJumlah + 1)}>
                    +
                  </button>
                </div>
                <hr></hr>
                <h4>Kategori</h4>
                <p>- Makanan manis</p>
                <h4>Deskripsi Produk</h4>
                <p className="text-muted">
                  <small>{product.description}</small>
                </p>
                <hr></hr>
              </div>
            </div>
          </div>
        </React.Fragment>
        <div className="mt-2">
          <div className="card">
            <div className="card-body">
              <strong>
                <p>Ringkasan Belanja</p>
              </strong>
              <div className="flex">
                <p>Subtotal: </p>
                {counterJumlah * (product.price + varianProduk.price)}
              </div>
              <p>Total Diskon</p>
              <hr></hr>
              <strong>
                <p>Rp. {counterJumlah * product.price}</p>
              </strong>
              <button>+ Keranjang</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
