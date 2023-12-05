import { useSearchParams } from "react-router-dom";

export function generateRating() {
  const rating = Math.random() + 4;
  return rating.toFixed(1);
}

export function generateSales() {
  const sales = Math.floor(Math.random() * (350 - 50 + 1)) + 50;
  return sales;
}

export function formatCurrency(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
}

export function getUrlId() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  return { id };
}

export function getCartId() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("cart");
  return { id };
}

export function getOrderId() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("detail");
  return { id };
}
