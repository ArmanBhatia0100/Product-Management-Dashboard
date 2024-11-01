import React from "react";
import { Rating } from "@mui/material";
import { Visibility, Edit, Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";

const ProductList = () => {
  // Sample product data

  const products = useSelector((state) => state.product);
  console.log(products[0].image);

  return (
    <div className="wrapper p-2">
      <div className="bg-white shadow p-6 m-4 rounded-lg">
        <h2 className="mb-4 font-semibold text-xl">Best Selling Products</h2>

        {/* Filter Controls */}
        <div className="flex gap-4 mb-6">
          <div className="max-w-48">
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
        <div className="overflow-x-scroll max-w-full">
          <table className="">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-1 py-1 ">UID</th>
                <th className="px-1 py-1">IMAGE</th>
                <th className="px-1 py-1">PRODUCT</th>
                <th className="px-1 py-1">CATEGORY</th>
                <th className="px-1 py-1">BRAND</th>
                <th className="px-1 py-1">PRICE</th>
                <th className="px-1 py-1">STOCK</th>
                <th className="px-1 py-1">RATING</th>
                <th className="px-1 py-1">ORDER</th>
                <th className="px-1 py-1">SALES</th>
                <th className="px-1 py-1">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="hover:bg-gray-50 border-b">
                  <td className="px-4 py-2 border">{product.uid}</td>
                  <td className="px-4 py-2 border">
                    <div className="flex flex-row items-center gap-2">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="rounded"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="px-4 py-2  text-nowrap">{product.name}</div>
                  </td>
                  <td className="px-4 py-2 border">{product.category}</td>
                  <td className="px-4 py-2 border">{product.brand}</td>
                  <td className="px-4 py-2 border">
                    <div className="text-gray-500 line-through">
                      ${product.originalPrice}
                    </div>
                    <div className="text-red-500">${product.salePrice}</div>
                  </td>
                  <td className="px-4 py-2 border">{product.stock}</td>
                  <td className="px-4 py-2 border">
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
                  <td className="px-4 py-2 border">{product.stock}</td>
                  <td className="px-4 py-2 border">${product.sales}</td>
                  <td className="px-4 py-2 border">
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
    </div>
  );
};

export default ProductList;
