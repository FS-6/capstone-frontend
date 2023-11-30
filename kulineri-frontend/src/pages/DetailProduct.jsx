import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getProductDetail } from "../../services/product.service";
import { getCategoryById } from "../../services/category.service";
import Footer from "../components/footer";
import Navlog from "../components/navlog";
import CardModal from "../components/Modal/CardModal";
import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../redux/reducer/cart";

const DetailProduct = () => {
  const { id } = useParams();
  const [counterJumlah, setCounterJumlah] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [productDetail, setProductDetail] = useState([]);
  const [category, setCategory] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleKeranjang = () => {
    // setIsModalOpen(true);
    if (productDetail) {
      navigate("/cart");
      // dispatch(addToCart({ productId: productDetail.id, quantity:counterJumlah }));
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
      <CardModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Navlog />
      <div className="flex flex-col md:flex-row md:flex-wrap justify-between px-5 md:px-20 py-5 md:py-10 mx-auto">
        <h3 className="font-bold text-lg pb-3 md:text-xl lg:text-2xl">
          Detail Produk
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <React.Fragment key={productDetail._id}>
            <div className="mt-2">
              <div className="">
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

            <div className="">
              <div className="">
                <div className="">
                  <div className="">
                    <strong>
                      <span className="font-bold text-sm mb-3 md:text-lg lg:text-xl">
                        {productDetail.name}
                      </span>
                    </strong>
                  </div>

                  <p className="font-semibold text-sm pb-2 md:text-lg lg:text-xl">
                    Rp. {productDetail.price}
                  </p>
                  <hr className="my-2"></hr>

                  <div className="flex justify-between mb-1">
                    <p className="font-semibold text-xs pb-2 md:text-sm lg:text-base">
                      Jumlah stok :
                    </p>
                    <p className="text-xs pb-2 md:text-sm lg:text-base">
                      {productDetail.stock}
                    </p>
                  </div>

                  <div className="flex justify-between mb-1">
                    <p className="font-semibold pb-2 text-xs md:text-sm lg:text-base">
                      Jumlah pesanan :
                    </p>
                    <div className="flex">
                      {counterJumlah === 1 ? (
                        <button
                          className="border w-5 h-5 lg:w-7 lg:h-7 rounded-full mx-2 text-gray-300 text-xs md:text-sm lg:text-base"
                          disabled
                        >
                          -
                        </button>
                      ) : (
                        <button
                          className="border w-5 h-5 lg:w-7 lg:h-7 rounded-full mx-2 text-xs md:text-sm lg:text-base"
                          onClick={() => setCounterJumlah(counterJumlah - 1)}
                        >
                          -
                        </button>
                      )}
                      <p className="text-xs md:text-sm lg:text-base">
                        {counterJumlah}
                      </p>
                      <button
                        className="border w-5 h-5 lg:w-7 lg:h-7 rounded-full ml-2 text-xs md:text-sm lg:text-base"
                        onClick={() => setCounterJumlah(counterJumlah + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <hr className="my-2"></hr>
                  <h4 className="font-bold text-sm mb-3 md:text-lg lg:text-xl">
                    Kategori
                  </h4>
                  <p className="ml-3 mb-2 pb-2 text-xs md:text-sm lg:text-base">
                    • {category.name}
                  </p>
                  <h4 className="font-bold text-sm mb-3 md:text-lg lg:text-xl">
                    Deskripsi Produk
                  </h4>
                  <p className="text-muted">
                    <p className="pb-2 text-xs md:text-sm lg:text-base">
                      {productDetail.description}
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </React.Fragment>
          <div className="mt-2">
            <div className="card">
              <div className="card-body p-5 border rounded-md">
                <p className="mb-2 font-bold text-sm md:text-lg lg:text-xl">
                  Ringkasan Belanja
                </p>

                <div className="flex justify-between mb-2">
                  <p className="text-xs md:text-sm lg:text-base">Subtotal</p>
                  <p className="text-xs md:text-sm lg:text-base text-right">
                    Rp. {subTotal}
                  </p>
                </div>

                <hr></hr>
                <p className="my-3 font-bold text-sm md:text-lg lg:text-xl text-right">
                  Rp. {subTotal}
                </p>
                <button
                  className="p-2 w-full rounded-md font-semibold text-sm md:text-lg lg:text-xl bg-red-600 text-white"
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
