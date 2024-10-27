import React from "react";
import { Rating } from "@mui/material";
import { Visibility, Edit, Delete } from "@mui/icons-material";

const Test = () => {
  // Sample product data
  const products = [
    {
      uid: "#1",
      image: "/api/placeholder/80/80",
      name: "Tops and skirt set",
      description: "Women's exclusive summer collection",
      category: "womans",
      brand: "richman",
      originalPrice: 21.0,
      salePrice: 21.0,
      stock: 380,
      rating: 4.9,
      reviews: 16,
      sales: "38k",
    },
    {
      uid: "#2",
      image: "/api/placeholder/80/80",
      name: "Tops and skirt set",
      description: "Women's exclusive summer collection",
      category: "womans",
      brand: "richman",
      originalPrice: 21.0,
      salePrice: 21.0,
      stock: 380,
      rating: 4.9,
      reviews: 16,
      sales: "38k",
    },
    // Add more products as needed
  ];

  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <h2 className="mb-4 font-semibold text-xl">Best Selling Products</h2>

      {/* Filter Controls */}
      <div className="flex gap-4 mb-6">
        <div className="w-48">
          <label className="block mb-1 text-gray-600 text-sm">SHOW BY</label>
          <select className="p-2 border rounded w-full">
            <option>None</option>
          </select>
        </div>
        <div className="w-48">
          <label className="block mb-1 text-gray-600 text-sm">
            CATEGORY BY
          </label>
          <select className="p-2 border rounded w-full">
            <option>None</option>
          </select>
        </div>
      </div>

      {/* Product Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-full">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-4 py-2 text-left">UID</th>
              <th className="px-4 py-2 text-left">PRODUCT</th>
              <th className="px-4 py-2 text-left">CATEGORY</th>
              <th className="px-4 py-2 text-left">BRAND</th>
              <th className="px-4 py-2 text-left">PRICE</th>
              <th className="px-4 py-2 text-left">STOCK</th>
              <th className="px-4 py-2 text-left">RATING</th>
              <th className="px-4 py-2 text-left">ORDER</th>
              <th className="px-4 py-2 text-left">SALES</th>
              <th className="px-4 py-2 text-left">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="hover:bg-gray-50 border-b">
                <td className="px-4 py-2">{product.uid}</td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="rounded w-12 h-12"
                    />
                    <div>
                      <div className="font-medium">{product.name}</div>
                      <div className="text-gray-500 text-sm">
                        {product.description}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">{product.category}</td>
                <td className="px-4 py-2">{product.brand}</td>
                <td className="px-4 py-2">
                  <div className="text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </div>
                  <div className="text-red-500">
                    ${product.salePrice.toFixed(2)}
                  </div>
                </td>
                <td className="px-4 py-2">{product.stock}</td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2">
                    <Rating
                      value={product.rating}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                    <span className="text-sm">
                      {product.rating}({product.reviews})
                    </span>
                  </div>
                </td>
                <td className="px-4 py-2">{product.stock}</td>
                <td className="px-4 py-2">${product.sales}</td>
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    <button className="bg-purple-100 hover:bg-purple-200 p-1 rounded">
                      <Visibility className="w-4 h-4 text-purple-600" />
                    </button>
                    <button className="bg-green-100 hover:bg-green-200 p-1 rounded">
                      <Edit className="w-4 h-4 text-green-600" />
                    </button>
                    <button className="bg-red-100 hover:bg-red-200 p-1 rounded">
                      <Delete className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-gray-600 text-sm">showing 12 of 60 results</div>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5, "...", 10].map((page, index) => (
            <button
              key={index}
              className={`px-3 py-1 rounded ${
                page === 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
