import React from "react";
import { HiStar } from "react-icons/hi";
import {
  generateRating,
  generateSales,
  formatCurrency,
} from "../../utils/helper";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { _id, image, name, price } = props.product;
  return (
    <div className="border rounded-md overflow-hidden">
      <Link to={`/product?id=${_id}`}>
        <img className="w-[100%] h-44 bg-gray-300" src={image} alt={name} />
      </Link>
      <div className="p-2">
        <h1 className="text-sm mb-1">{name}</h1>
        <h3 className="text-sm font-bold mb-8">{formatCurrency(price)}</h3>
        <div className="flex items-center my-2 gap-3">
          <div className="flex items-center gap-1">
            <HiStar className="text-lg text-yellow-400" />
            <span className="text-xs text-slate-400">{generateRating()}</span>
          </div>{" "}
          <span className="text-xs text-slate-400">
            {generateSales()} terjual
          </span>
        </div>
      </div>
    </div>
  );
}
