import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getProductDetail } from "../../services/product.service";
import { getCategoryById } from "../../services/category.service";
import Footer from "../components/footer";
import Navlog from "../components/navlog";
import CardModal from "../components/Modal/CardModal";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/reducer/cart";

const DetailProduct = () => {
  const { id } = useParams();
  const [counterJumlah, setCounterJumlah] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [productDetail, setProductDetail] = useState([]);
  const [category, setCategory] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  console.log(cartItems);

  const handleKeranjang = () => {
    // setIsModalOpen(true);
    if(productDetail) {
      dispatch(addToCart(productDetail, counterJumlah, subTotal));
    }
  };

  const subTotal = counterJumlah * productDetail.price;

  useEffect(() => {
    const wrapper = setTimeout(() => {
      if (productDetail.length === 0) {
        getProductDetail(id).then((data) => {
          setProductDetail(data.data);
          setIsLoading(false);
        });
      }
    }, 0);
    return () => clearTimeout(wrapper);
  }, []);

  useEffect(() => {
    const wrapper = setTimeout(() => {
      if (productDetail && productDetail.category) {
        getCategoryById(productDetail.category).then((data) => {
          setCategory(data.data);
          setIsLoading(false);
        });
      }
    }, 0);
    return () => clearTimeout(wrapper);
  }, [productDetail]);

  if (!productDetail) {
    return <div>productDetail not found</div>;
  }

  return (
    <>
      <CardModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <Navlog />
      <div className="flex flex-wrap justify-between px-20 py-10">
        <h3 className="text-2xl font-bold pb-3">Detail Produk</h3>
        <div className="grid grid-cols-3 gap-5">
          <React.Fragment key={productDetail._id}>
            <div className="mt-2">
              <div className="mr-5">
                {!isLoading ? (
                  <img
                    className="w-full rounded-md"
                    alt={`img${id}.png`}
                    src={productDetail.image}
                  />
                ) : (
                  <div>Loading</div>
                )}
              </div>
            </div>

            <div>
              <div className="mr-5">
                <div className="">
                  <div className="">
                    <strong>
                      <span className="text-2xl font-bold">
                        {productDetail.name}
                      </span>
                    </strong>
                  </div>

                  <p className="text-black mb-1 font-bold text-xl">
                    Rp. {productDetail.price}
                  </p>
                  <hr className="my-2"></hr>

                  <div className="flex justify-between mb-1">
                    <p className="font-semibold">Jumlah stok :</p>
                    <p>{productDetail.stock}</p>
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
                  <p className="ml-3 mb-2">{category.name}</p>
                  <h4 className="font-semibold">Deskripsi Produk</h4>
                  <p className="text-muted">
                    <small>{productDetail.description}</small>
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
                <button
                  className="border p-2 w-full rounded-md font-semibold"
                  onClick={handleKeranjang}
                >
                  + Keranjang
                </button>
                {/* <Link to={`/cart`}>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailProduct;
