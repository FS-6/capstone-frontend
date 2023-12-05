import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts, getProductByCategory } from "../redux/reducer/product";
import { getAllCategories } from "../redux/reducer/category";
import ProductSection from "../components/Section/ProductSection";
import CategorySection from "../components/Section/CategorySection";
import Loading from "../components/Animation/Loading";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { isLoading: productIsLoading, products } = useSelector(
    (state) => state.product
  );
  const { isLoading: categoryIsLoading, categories } = useSelector(
    (state) => state.category
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, [dispatch]);

  const handleCategoryClick = (id) => {
    dispatch(getProductByCategory(id));
    setActiveCategory(id);
  };

  const handleClearFilter = () => {
    dispatch(getAllProducts());
    setActiveCategory(null);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (productIsLoading || categoryIsLoading) {
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <Navbar onSearchChange={handleSearchChange} />
      <section className="max-w-7xl m-auto px-4">
        <div className="mb-8 ">
          <img
            src="../logo/kulineri-banner.png"
            alt="promo"
            className="w-full rounded-md"
          />
        </div>
        <h3 className="font-bold text-lg pb-4 md:text-xl">Pilih Kategori :</h3>
        <CategorySection
          categories={categories}
          isLoading={categoryIsLoading}
          activeCategory={activeCategory}
          onCategoryClick={handleCategoryClick}
          onClearFilter={handleClearFilter}
        />
        <ProductSection
          products={filteredProducts}
          isLoading={productIsLoading}
        />
      </section>
      <Footer />
    </>
  );
}
