import React from "react";
import { Rating } from "@mui/material";
import { Visibility, Edit, Delete } from "@mui/icons-material";

const ProductList = () => {
  // Sample product data
  const products = [
    {
      uid: "#1",
      image: "https://picsum.photos/id/1/200/300",
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
      image: "https://picsum.photos/id/2/200/300",
      name: "Casual Denim Jacket",
      description: "Unisex casual wear, fall collection",
      category: "unisex",
      brand: "denimX",
      originalPrice: 45.0,
      salePrice: 35.0,
      stock: 250,
      rating: 4.5,
      reviews: 20,
      sales: "12k",
    },
    {
      uid: "#3",
      image: "https://picsum.photos/id/3/200/300",
      name: "Basic White Tee",
      description: "Classic white t-shirt, essential collection",
      category: "men",
      brand: "basicBrand",
      originalPrice: 15.0,
      salePrice: 10.0,
      stock: 600,
      rating: 4.2,
      reviews: 50,
      sales: "70k",
    },
    {
      uid: "#4",
      image: "https://picsum.photos/id/4/200/300",
      name: "Floral Maxi Dress",
      description: "Women's bohemian floral dress",
      category: "womans",
      brand: "bohoDream",
      originalPrice: 60.0,
      salePrice: 50.0,
      stock: 180,
      rating: 4.8,
      reviews: 36,
      sales: "15k",
    },
    {
      uid: "#5",
      image: "https://picsum.photos/id/5/200/300",
      name: "Classic Black Jeans",
      description: "Men's slim-fit black jeans",
      category: "men",
      brand: "urbanFit",
      originalPrice: 40.0,
      salePrice: 38.0,
      stock: 300,
      rating: 4.3,
      reviews: 25,
      sales: "25k",
    },
    {
      uid: "#6",
      image: "https://picsum.photos/id/6/200/300",
      name: "Athletic Joggers",
      description: "Comfortable joggers for active lifestyle",
      category: "unisex",
      brand: "sportPro",
      originalPrice: 35.0,
      salePrice: 32.0,
      stock: 450,
      rating: 4.7,
      reviews: 42,
      sales: "29k",
    },
    {
      uid: "#7",
      image: "https://picsum.photos/id/7/200/300",
      name: "Silk Scarf",
      description: "Luxurious silk scarf for all occasions",
      category: "womans",
      brand: "satinLux",
      originalPrice: 25.0,
      salePrice: 20.0,
      stock: 350,
      rating: 4.9,
      reviews: 33,
      sales: "8k",
    },
    {
      uid: "#8",
      image: "https://picsum.photos/id/8/200/300",
      name: "Striped Polo Shirt",
      description: "Classic striped polo for men",
      category: "men",
      brand: "classicWear",
      originalPrice: 28.0,
      salePrice: 25.0,
      stock: 400,
      rating: 4.5,
      reviews: 18,
      sales: "19k",
    },
    {
      uid: "#9",
      image: "https://picsum.photos/id/9/200/300",
      name: "Kids' Cartoon Hoodie",
      description: "Fun hoodie with cartoon print",
      category: "kids",
      brand: "kidzClub",
      originalPrice: 30.0,
      salePrice: 25.0,
      stock: 200,
      rating: 4.6,
      reviews: 22,
      sales: "10k",
    },
    {
      uid: "#10",
      image: "https://picsum.photos/id/10/200/300",
      name: "Cotton Pajama Set",
      description: "Soft cotton sleepwear set",
      category: "unisex",
      brand: "dreamWear",
      originalPrice: 20.0,
      salePrice: 18.0,
      stock: 500,
      rating: 4.4,
      reviews: 27,
      sales: "23k",
    },
    {
      uid: "#11",
      image: "https://picsum.photos/id/11/200/300",
      name: "Summer Straw Hat",
      description: "Light and breathable straw hat for summer",
      category: "womans",
      brand: "sunnyStyle",
      originalPrice: 18.0,
      salePrice: 15.0,
      stock: 300,
      rating: 4.7,
      reviews: 30,
      sales: "5k",
    },
    {
      uid: "#12",
      image: "https://picsum.photos/id/12/200/300",
      name: "Warm Winter Gloves",
      description: "Knitted gloves for cold winters",
      category: "unisex",
      brand: "cozyHands",
      originalPrice: 10.0,
      salePrice: 8.0,
      stock: 600,
      rating: 4.3,
      reviews: 45,
      sales: "40k",
    },
    {
      uid: "#13",
      image: "https://picsum.photos/id/13/200/300",
      name: "Formal Leather Belt",
      description: "High-quality leather belt",
      category: "men",
      brand: "urbanClassic",
      originalPrice: 25.0,
      salePrice: 22.0,
      stock: 220,
      rating: 4.5,
      reviews: 19,
      sales: "12k",
    },
    {
      uid: "#14",
      image: "https://picsum.photos/id/14/200/300",
      name: "Workout Tank Top",
      description: "Lightweight tank top for gym",
      category: "womans",
      brand: "fitFlex",
      originalPrice: 20.0,
      salePrice: 18.0,
      stock: 320,
      rating: 4.6,
      reviews: 23,
      sales: "15k",
    },
    {
      uid: "#15",
      image: "https://picsum.photos/id/15/200/300",
      name: "Kids' Rain Boots",
      description: "Waterproof boots for rainy days",
      category: "kids",
      brand: "rainyFun",
      originalPrice: 30.0,
      salePrice: 25.0,
      stock: 180,
      rating: 4.8,
      reviews: 12,
      sales: "7k",
    },
    {
      uid: "#16",
      image: "https://picsum.photos/id/16/200/300",
      name: "Leather Wallet",
      description: "Elegant leather wallet for men",
      category: "men",
      brand: "walletKing",
      originalPrice: 35.0,
      salePrice: 30.0,
      stock: 140,
      rating: 4.9,
      reviews: 28,
      sales: "9k",
    },
    {
      uid: "#17",
      image: "https://picsum.photos/id/17/200/300",
      name: "Lightweight Raincoat",
      description: "Perfect raincoat for unpredictable weather",
      category: "unisex",
      brand: "rainShield",
      originalPrice: 55.0,
      salePrice: 45.0,
      stock: 260,
      rating: 4.7,
      reviews: 37,
      sales: "15k",
    },
  ];

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
                      ${product.originalPrice.toFixed(2)}
                    </div>
                    <div className="text-red-500">
                      ${product.salePrice.toFixed(2)}
                    </div>
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
