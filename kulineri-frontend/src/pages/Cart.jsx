import { useEffect } from "react";
import Navbar from "../layouts/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, getCart } from "../redux/reducer/cart";
import { getAllProducts, getProductById } from "../redux/reducer/product";
import { formatCurrency } from "../utils/helper";
import { Link } from "react-router-dom";
import { HiTrash } from "react-icons/hi";
import Footer from "../layouts/Footer";

export default function Cart() {
  const { carts, isLoading } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    if (carts.product) {
      carts.product.forEach((productId) => {
        dispatch(getProductById(productId));
      });
    }
  }, [carts, dispatch]);

  const handleCartDelete = async (id) => {
    try {
      await dispatch(deleteCart(id));
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  let content;
  if (sessionStorage.getItem("isLogin") === null) {
    content = <p>Login dulu bang</p>;
  } else if (isLoading === true || carts.length === 0) {
    content = <p>Belum ada produk di keranjang</p>;
  } else {
    content = carts.map((cart) => {
      const product = products.find((product) => product._id === cart.product);
      return (
        <div
          key={cart._id}
          className="border p-4 bg-gray-50 flex items-center justify-between mb-5 rounded-md"
        >
          <div className="flex gap-5">
            <div>
              <img
                src={product ? product.image : "default-image-url"}
                className="w-40 rounded-md"
                alt="product-image"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-5">
                {product ? product.name : "Product not found"}
              </h3>
              <div>
                <p>
                  total barang : <span>{cart.quantity}</span>
                </p>
                <p>
                  total harga : <span>{formatCurrency(cart.totalPrice)}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleCartDelete(cart._id)}
              className="bg-gray-400 text-white rounded-md p-4"
            >
              <HiTrash />
            </button>
            <button>
              <Link
                className="bg-red-500 text-white rounded-md p-3"
                to={`/checkout?cart=${cart._id}`}
              >
                Checkout
              </Link>
            </button>
          </div>
        </div>
      );
    });
  }

  return (
    <>
      <Navbar />
      <div className="w-9/12 mt-10 px-5 mx-auto justify-center h-screen">
        <div className="">{content}</div>
      </div>
      <Footer />
    </>
  );
}
