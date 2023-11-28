import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const DetailProduct = () => {
  const { id } = useParams();
  const [counterJumlah, setCounterJumlah] = useState(1);
  const [product, setProduct] = useState([])

  useEffect(() => {
    getProductsbyId()
  }, [])

  const getProductsbyId = async () => {
    const response = await axios.get(
      `https://lazy-shorts-fish.cyclic.app/products/${id}`
    );
    setProduct(response.data.data);
  };

  console.log(product)

  const subTotal = counterJumlah * product.price;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex flex-wrap justify-between px-20 py-10">
      <h3 className="text-2xl font-bold pb-3">Detail Produk</h3>
      <div className="grid grid-cols-3 gap-5">
        <React.Fragment key={product._id}>
          <div className="mt-2">
            <div className="mr-5">
              <img
                className="w-full rounded-md"
                alt={`img${id}.png`}
                src={product.image}
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

                <p className="text-black mb-1 font-bold text-xl">
                  Rp. {product.price}
                </p>
                <hr className="my-2"></hr>

                <div className="flex justify-between mb-1">
                  <p className="font-semibold">Jumlah stok :</p>
                  <p>{product.stock}</p>
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
                <p className="ml-3 mb-2">{product.category}</p>
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
