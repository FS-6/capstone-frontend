import { useEffect, useState } from "react";
import { getCartById } from "../redux/reducer/cart";
import { formatCurrency, getCartId } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/reducer/user";
import { getProductById } from "../redux/reducer/product";
import {
  createTransaction,
  getTransactionById,
} from "../redux/reducer/transaction";
import { createOrder, getOrderById } from "../redux/reducer/order";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { id } = getCartId();
  const { carts } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.product);
  const { transactions } = useSelector((state) => state.transaction);
  const { orders } = useSelector((state) => state.order);
  const [pengiriman, setPengiriman] = useState("");
  const [pembayaran, setPembayaran] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = {
    cart: id,
    shipping: pengiriman,
    payment: pembayaran,
  };

  useEffect(() => {
    dispatch(getCartById(id));
  }, [id]);

  useEffect(() => {
    dispatch(getProductById(carts.product));
  }, [carts.product]);

  useEffect(() => {
    dispatch(getTransactionById(transactions._id));
  }, [transactions._id]);

  useEffect(() => {
    dispatch(getOrderById(orders._id));
  }, [orders._id]);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createTransaction(form));
  };

  const handleCreateOrder = () => {
    dispatch(createOrder({ transactionId: transactions._id }));
  };

  useEffect(() => {
    if (orders._id) {
      navigate(`/order?detail=${orders._id}`);
    }
  }, [orders, navigate]);

  const handleCancleOrder = () => {
    window.location.href = "/cart";
  };

  return (
    <section className="max-w-6xl mx-auto px-5 mt-10 mb-10 flex flex-wrap gap-8">
      <div className="w-full md:w-[60%]">
        <div className="bg-green-100 p-5 border rounded-md mb-8">
          <span className="text-sm">
            Ini halaman terakhir dari proses belanjamu. Pastikan semua sudah
            benar, ya ✨
          </span>
        </div>
        <div className="mb-8">
          <div key={carts._id}>
            <h1 className="text-lg font-semibold mb-3">Produk di Beli</h1>
            <div className="flex gap-5 p-2 border rounded-md bg-zinc-50 shadow-sm">
              <img
                src={products.image}
                alt="product-img"
                className="w-[150px] rounded-md"
                id="product-image"
              />
              <div className="w-full">
                <h3 className="font-medium text-lg mb-[2px]" id="product-name">
                  {products.name}
                </h3>
                <h5 className="mb-4 text-sm"></h5>
                <div className="flex justify-between">
                  <p id="product-price">{carts.quantity}</p>
                  <span className="font-semibold" id="total-price">
                    {formatCurrency(carts.totalPrice)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-semibold mb-3">
            Pengiriman dan Pembayaran
          </h1>
          <form onSubmit={handleSubmit} method="post">
            <div className="mb-4 bg-zinc-50 p-4 border rounded-sm">
              <h1 className="font-sm mb-2">
                <span className="bg-zinc-200 p-1 rounded-sm text-xs font-semibold mr-2">
                  Utama
                </span>
                {user.name} -
                <span className="font-medium"> Kota {user.address}</span>
              </h1>
            </div>
            <div className="mb-6 flex flex-col">
              <label htmlFor="pengiriman" className="font-semibold pb-3">
                Pilih Pengiriman
              </label>
              <select
                name="pengiriman"
                id="opsi-pengiriman"
                className="w-full p-2 border rounded-md"
                value={pengiriman}
                onChange={(e) => setPengiriman(e.target.value)}
              >
                <option value="">Pilih Opsi</option>
                <option value="Jne">JNE</option>
                <option value="Si Cepat">Si Cepat</option>
                <option value="Ninja Express">Ninja Express</option>
              </select>
              <div className="p-2">
                <p className="text-sm font-medium" id="tarif-pengiriman" />
              </div>
            </div>
            <div className="mb-6 flex flex-col">
              <label htmlFor="pembayaran">Pilih Pembayaran</label>
              <select
                name="pembayaran"
                id="opsi-pembayaran"
                className="w-full p-2 border rounded-md"
                value={pembayaran}
                onChange={(e) => setPembayaran(e.target.value)}
              >
                <option value="">Pilih Opsi</option>
                <option value="DANA">DANA</option>
                <option value="OVO">OVO</option>
                <option value="COD">COD</option>
              </select>
              <div className="p-2">
                <p className="text-sm font-medium" id="tarif-pembayaran" />
              </div>
            </div>
            <div>
              <input
                type="submit"
                value="konfirmasi"
                className="w-full border rounded-md bg-red-700 text-white p-3 cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
      <div
        className="w-full md:w-[35%] bg-zinc-50 p-5 border rounded-md"
        style={{ height: "max-content" }}
      >
        <h1 className="font-semibold mb-5">Ringkasan Belanja</h1>
        <div className="pb-5">
          <h3 className="font-semibold mb-2">Total Belanja</h3>
          <div className="flex justify-between mb-1">
            <p>Total Harga</p>
            <p>{formatCurrency(carts.totalPrice)}</p>
          </div>
          <div className="flex justify-between mb-1">
            <p>Total Ongkos Kirim</p>
            <span>Rp. 0</span>
          </div>
          <div className="flex justify-between mb-5">
            <p>Total Diskon</p>
            <span>Rp. 0</span>
          </div>
          <div className="flex justify-between border-y-2 py-4">
            <p className="text-base font-semibold">Total Tagihan</p>
            <p>{formatCurrency(carts.totalPrice)}</p>
          </div>
        </div>
        <button
          onClick={handleCreateOrder}
          className="p-2 bg-red-700 text-white w-full rounded-md mb-3"
        >
          Bayar Pesanan
        </button>
        <button
          onClick={handleCancleOrder}
          className="p-2 bg-red-700 text-white w-full rounded-md"
          id="buy-btn"
        >
          batal
        </button>
      </div>
    </section>
  );
}
