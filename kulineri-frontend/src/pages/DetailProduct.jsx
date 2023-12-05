import { useEffect, useState } from "react";
import { formatCurrency, getUrlId } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../redux/reducer/product";
import Navbar from "../layouts/Navbar";
import Loading from "../components/Animation/Loading";
import { addToCart } from "../redux/reducer/cart";
import { toast } from "react-toastify";
import Footer from "../layouts/Footer";

export default function DetailProduct() {
  const { id } = getUrlId();
  const dispatch = useDispatch();
  const { isLoading, products } = useSelector((state) => state.product);
  const [value, setValue] = useState(1);
  const cart = {
    productId: products._id,
    quantity: value,
  };

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch]);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const totalPrice = products.price * value;

  const handleAddToCart = () => {
    dispatch(addToCart(cart))
      .then(() => {
        toast.success("Berhasil di tambahkan", {
          position: "top-center",
          autoClose: 500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          closeButton: false,
          draggable: true,
          theme: "colored",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row md:flex-wrap justify-between px-5 py-5 md:py-10 md:px-10 mx-auto">
        <h3 className="font-bold text-lg pb-3 md:text-xl">Detail Produk</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div>
            {isLoading ? (
              <Loading />
            ) : (
              <img
                src={products.image}
                className="w-full rounded-md"
                alt="product-image"
              />
            )}
          </div>
          <div>
            <h5 className="font-semibold text-xl mb-4">{products.name}</h5>
            <p className="text-5xxl font-bold mb-16">
              {formatCurrency(products.price)}
            </p>
            <p className="mb-8">Stok Tersedia : {products.stock}</p>
            <span className="font-light border-b">deskripsi produk :</span>
            <p className="text-sm mb-4 mt-1">{products.description}</p>
          </div>
          <div
            className="border rounded-md p-3"
            style={{ height: "max-content" }}
          >
            <h3 className="mb-2">Atur Jumlah Pembelian :</h3>
            <div>
              <button
                className="rounded-full p-2 bg-gray-100"
                onClick={handleDecrement}
              >
                -
              </button>
              <span className="px-3">{value}</span>
              <button
                className="rounded-full p-2 bg-gray-100"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
            <div className="flex justify-between">
              <p>Subtotal : </p>
              <span>{formatCurrency(totalPrice)}</span>
            </div>
            <button
              className="bg-red-500 p-3 text-white w-full rounded-md mt-10"
              onClick={handleAddToCart}
            >
              + Keranjang
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
