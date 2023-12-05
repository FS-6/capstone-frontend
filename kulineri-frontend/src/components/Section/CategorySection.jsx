import React from "react";
import Category from "../Button/Category";
import { HiOutlineTrash } from "react-icons/hi";

const CategorySection = ({
  categories,
  isLoading,
  activeCategory,
  onCategoryClick,
  onClearFilter,
}) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-2 mb-8">
      {categories.map((category) => (
        <Category
          key={category._id}
          category={category}
          isActive={category._id === activeCategory}
          onClick={() => onCategoryClick(category._id)}
        />
      ))}
      {activeCategory && (
        <button
          onClick={onClearFilter}
          className="text-sm p-1 px-3 border rounded-lg text-black bg-gray-200 overflow-hidden flex items-center gap-2"
        >
          <HiOutlineTrash />
          hapus filter
        </button>
      )}
    </div>
  );
};

export default CategorySection;
