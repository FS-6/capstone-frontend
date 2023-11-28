import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Bakpia Kukus Tugu Jogja',
    city: 'Yogyakarta',
    price: 55000,
    rating: 4.8,
    description: 'Pie susu atau pastei susu adalah sebuah hidangan penutup tradisional Indonesia yang terbuat dari kue pastri yang diisi dengan kustar telur serta susu kental manis. Pastri tersebut sangat datar dengan isian hanya terdiri dari satu lapisan kustar yang sangat tipis. Asal pastri tersebut berasal dari Bali. Tahan 6 hari di suhu ruang. Tahan 10 hari di kulkas.',
  },
  {
    id: 2,
    name: 'Bakpia Kukus Tugu Jogja',
    city: 'Yogyakarta',
    price: 55000,
    rating: 4.8,
    description: 'Pie susu atau pastei susu adalah sebuah hidangan penutup tradisional Indonesia yang terbuat dari kue pastri yang diisi dengan kustar telur serta susu kental manis. Pastri tersebut sangat datar dengan isian hanya terdiri dari satu lapisan kustar yang sangat tipis. Asal pastri tersebut berasal dari Bali. Tahan 6 hari di suhu ruang. Tahan 10 hari di kulkas.',
  },
  {
    id: 3,
    name: 'Bakpia Kukus Tugu Jogja',
    city: 'Yogyakarta',
    price: 55000,
    rating: 4.8,
    description: 'Pie susu atau pastei susu adalah sebuah hidangan penutup tradisional Indonesia yang terbuat dari kue pastri yang diisi dengan kustar telur serta susu kental manis. Pastri tersebut sangat datar dengan isian hanya terdiri dari satu lapisan kustar yang sangat tipis. Asal pastri tersebut berasal dari Bali. Tahan 6 hari di suhu ruang. Tahan 10 hari di kulkas.',
  },
  {
    id: 4,
    name: 'Bakpia Kukus Tugu Jogja',
    city: 'Yogyakarta',
    price: 55000,
    rating: 4.8,
    description: 'Pie susu atau pastei susu adalah sebuah hidangan penutup tradisional Indonesia yang terbuat dari kue pastri yang diisi dengan kustar telur serta susu kental manis. Pastri tersebut sangat datar dengan isian hanya terdiri dari satu lapisan kustar yang sangat tipis. Asal pastri tersebut berasal dari Bali. Tahan 6 hari di suhu ruang. Tahan 10 hari di kulkas.',
  },
];

const Products = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">List of Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Link key={product.id} to={`/products/detailproduct/${product.id}`}>
            <div className="bg-white shadow-md p-4 cursor-pointer">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-700">{product.city}</p>
              <p className="text-gray-700">{product.rating}</p>
              <p className="text-gray-600 mb-2">Rp {product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
