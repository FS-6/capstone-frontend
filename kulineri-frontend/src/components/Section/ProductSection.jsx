import React from "react";
import ProductCard from "../Card/Product";

const ProductSection = ({ products, isLoading }) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (products.length === 0) {
    return (
      <p className="text-center py-10">Produk yang kamu cari tidak ditemukan</p>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-3">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductSection;
