import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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

  const subTotal = counterJumlah * (product.price + varianProduk.price);

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
    <div className="flex flex-wrap justify-between px-20 py-10">
      <h3 className="text-2xl font-bold pb-3">Detail Produk</h3>
      <div className="grid grid-cols-3 gap-5">
        <React.Fragment key={product.id}>
          <div className="mt-2">
            <div className="mr-5">
              <img
                className="w-full"
                alt={`img${id}.png`}
                src={`../../src/assets/product/img1.png`}
              />
            </div>
          </div>

          <div>
            <div className="mr-5">
              <div className="">
                <div className="">
                  <strong>
                    <span className="text-2xl font-bold">{product.name}</span>
                  </strong>
                </div>
                <p className="text-gray-700 mt-2 mb-1">{product.city}</p>
                <div className="flex mb-1">
                  <span className="text-md text-amber-300 mr-1">&#9733;</span>
                  <p className="text-gray-700">{product.rating}</p>
                </div>

                <p className="text-black mb-1 font-bold text-xl">
                  Rp. {product.price}
                </p>
                <hr className="my-2"></hr>
                <p className="mb-1 font-semibold">Pilih varian :</p>
                <div>
                  {varian.map((data) => (
                    <button
                      key={data.id}
                      onClick={() => handleVarian(data)}
                      className={`w-24 mb-2 mr-2 p-2 border border-black rounded-md bg-white ${
                        varianProduk.id === data.id
                          ? "bg-gray-500"
                          : "bg-gray-800"
                      }`}
                      style={{
                        backgroundColor:
                          varianProduk.id === data.id ? "black" : "white",
                        color: varianProduk.id === data.id ? "white" : "black",
                      }}
                    >
                      {data.nama}
                    </button>
                  ))}
                </div>

                <div className="flex justify-between mb-1">
                  <p className="font-semibold">Jumlah stok :</p>
                  <p>{product.stok}</p>
                </div>

                <div className="flex justify-between mb-1">
                  <p className="font-semibold">Jumlah pesanan :</p>
                  <div>
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
                </div>
                <hr className="my-2"></hr>
                <h4 className="font-semibold">Kategori</h4>
                <p className="ml-3 mb-2">- Makanan manis</p>
                <h4 className="font-semibold">Deskripsi Produk</h4>
                <p className="text-muted">
                  <small>{product.description}</small>
                </p>
                <hr className="my-2"></hr>
              </div>
            </div>
          </div>
        </React.Fragment>
        <div className="mt-2">
          <div className="card">
            <div className="card-body p-5 border rounded-md">
              <p className="text-xl mb-4 font-bold">Ringkasan Belanja</p>

              <div className="flex justify-between mb-2">
                <p>Subtotal</p>
                <p>Rp. {subTotal}</p>
              </div>

              <hr></hr>
              <strong>
                <p className="text-lg my-3 text-right">Rp. {subTotal}</p>
              </strong>
              <Link to={`/cart`}>
                <button className="border p-2 w-full rounded-md font-semibold">
                  + Keranjang
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
