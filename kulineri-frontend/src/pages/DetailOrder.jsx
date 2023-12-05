import { useEffect } from "react";
import { formatCurrency, getOrderId } from "../utils/helper";
import { useSelector, useDispatch } from "react-redux";
import { getOrderById } from "../redux/reducer/order";
import { getTransactionById } from "../redux/reducer/transaction";
import { getCartById } from "../redux/reducer/cart";
import { getProductById } from "../redux/reducer/product";
import { getUser } from "../redux/reducer/user";

export default function DetailOrder() {
  const { id } = getOrderId();
  const { orders } = useSelector((state) => state.order);
  const { transactions } = useSelector((state) => state.transaction);
  const { carts } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderById(id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTransactionById(orders.transaction));
  }, [orders, dispatch]);

  useEffect(() => {
    dispatch(getCartById(transactions.cart));
  }, [transactions, dispatch]);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProductById(carts.product));
  }, [carts, dispatch]);

  const handlePrintInvoice = () => {
    window.print();
  };

  return (
    <section className="my-6">
      <section className="max-w-3xl mx-auto px-5 mb-8">
        <h1 className="text-xl font-semibold mb-4">Detail Pesanan</h1>
        <p className="my-5">
          Status :{" "}
          <span className="bg-green-100 ml-2 p-2 rounded-md max-w-max my-5">
            {orders.status}
          </span>
        </p>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium">No. Invoice</h3>
          <p>{orders.order_code}</p>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="font-medium">Tanggal Pembelian</h3>
          <p>{orders.order_date}</p>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-5 mb-8">
        <h1 className="text-xl font-semibold mb-4">Detail Produk</h1>
        <div className="flex gap-5 p-2 border rounded-md bg-zinc-50 shadow-sm">
          <img
            src={products.image}
            alt="product-img"
            className="h-[60px] rounded-md"
          />
          <div className="w-full flex flex-col justify-between">
            <h3 className="font-medium text-lg mb-[2px]">{products.name}</h3>
            <div className="flex justify-between">
              <p>
                {carts.quantity} x {formatCurrency(products.price)}
              </p>
              <span className="font-semibold">
                {formatCurrency(carts.totalPrice)}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-5 mb-8">
        <h1 className="text-xl font-semibold mb-4">Info Pengiriman</h1>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium">Kurir</h3>
          <p className="w-[70%]">{transactions.shipping}</p>
        </div>
        <div className="flex mb-3 justify-between">
          <h3 className="font-medium">Alamat</h3>
          <p className="w-[70%]">Kota - {user.address}</p>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-5 mb-12">
        <h1 className="text-xl font-semibold mb-4">Rincian Pembayaran</h1>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium">Total Harga</h3>
          <p className="w-[70%]" id="total-price-end">
            {formatCurrency(carts.totalPrice)}
          </p>
        </div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium">Biaya Kirim</h3>
          <p className="w-[70%]" id="biaya-kirim">
            Rp. 0
          </p>
        </div>
        <div className="flex mb-3 justify-between">
          <h3 className="font-medium">Diskon</h3>
          <p className="w-[70%]">Rp. 0</p>
        </div>
        <div className="flex mb-3 justify-between">
          <h3 className="font-medium">Total Belanja</h3>
          <p className="w-[70%]">{formatCurrency(carts.totalPrice)}</p>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-5 flex items-center justify-end gap-3">
        <button
          className="py-2 px-4 bg-red-700 text-white rounded-md"
          onClick={handlePrintInvoice}
        >
          Cetak struk
        </button>
        <a href="/" className="py-2 px-4 bg-red-700 text-white rounded-md">
          Kembali ke beranda
        </a>
      </section>
    </section>
  );
}
