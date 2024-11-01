import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Rating,
  Button,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/productSlice";
import { faker } from "@faker-js/faker";

//TODO-> Working Form
//TODO->
const ProductForm = () => {
  const [rating, setRating] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const [formData, setFormData] = useState({
    uid: "#" + Math.floor(Math.abs(Math.random() * 1000)),
    image: "",
    name: "",
    description: "",
    category: "",
    subCategory: "",
    brand: "",
    originalPrice: "",
    salePrice: "",
    discount: "",
    stock: "",
    rating: 1,
    reviews: 0,
    sales: "15K",
  });
  const dispatch = useDispatch();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Function will start converting the file to base64 format once it finishes it trigeres the function reader.onloadend.
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
  };

  function submitHandler(e) {
    e.preventDefault();
    dispatch(addProduct(formData));
  }

  const handleChange = (event) => {
    setFormData({
      ...formData,
      image: faker.image.avatar(),
      rating,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="bg-gray-50 p-4 md:p-8 min-h-screen">
      <div className="mx-auto max-w-5xl">
        {/* Basic Information Section */}
        <div className="bg-white shadow-md mb-6 p-6 rounded-lg">
          <h2 className="mb-6 font-semibold text-xl">Basic Information</h2>

          <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
            <TextField
              fullWidth
              label="Product Name"
              variant="outlined"
              className="mb-4"
              value={formData.name}
              onChange={handleChange}
              name="name"
              required={true}
            />

            <TextField
              fullWidth
              label="Description"
              variant="outlined"
              multiline
              rows={4}
              className="md:col-span-2 mb-4"
              value={formData.description}
              onChange={handleChange}
              name="description"
              required={true}
            />

            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                label="Category"
                defaultValue=""
                onChange={handleChange}
                name="category"
                required={true}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="electronics">Electronics</MenuItem>
                <MenuItem value="clothing">Clothing</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Sub Category</InputLabel>
              <Select
                label="Sub Category"
                defaultValue=""
                onChange={handleChange}
                name="subCategory"
                required={true}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="phones">Phones</MenuItem>
                <MenuItem value="laptops">Laptops</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              label="Price"
              variant="outlined"
              type="number"
              name="salePrice"
              value={formData.salePrice}
              onChange={handleChange}
              required={true}
            />

            <TextField
              fullWidth
              label="Old Price"
              variant="outlined"
              type="number"
              name="originalPrice"
              value={formData.originalPrice}
              onChange={handleChange}
              required={true}
            />

            <TextField
              fullWidth
              label="Brand"
              variant="outlined"
              value={formData.brand}
              name="brand"
              onChange={handleChange}
              required={true}
            />

            <TextField
              fullWidth
              label="Discount %"
              variant="outlined"
              type="number"
              name="discount"
              value={formData.discount}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              label="Product Stock"
              variant="outlined"
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              required={true}
            />

            <div className="md:col-span-2">
              <p className="mb-2">Ratings</p>
              <Rating
                onChange={(event, newValue) => {
                  setRating((Number(event.target.value) * 10) / 10);
                }}
              />
            </div>
          </div>
        </div>

        {/* Media Section */}
        <div className="bg-white shadow-md mb-6 p-6 rounded-lg">
          <h2 className="mb-6 font-semibold text-xl">Media And Published</h2>

          <div className="gap-4 grid grid-cols-2 md:grid-cols-4">
            {selectedImage && (
              <div className="relative">
                <img
                  src={selectedImage}
                  alt="Product"
                  className="rounded-lg w-full h-32 object-cover"
                />
                <button
                  onClick={removeImage}
                  className="-top-2 -right-2 absolute flex justify-center items-center bg-red-500 rounded-full w-6 h-6 text-white"
                >
                  ×
                </button>
              </div>
            )}

            <label className="flex flex-col justify-center items-center border-2 border-gray-300 hover:border-gray-400 p-4 border-dashed rounded-lg h-32 cursor-pointer">
              <div className="text-gray-400">
                <svg
                  className="mx-auto w-12 h-12"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="mt-1 text-sm">Upload image</p>
              </div>
              <input
                type="file"
                className="hidden"
                onChange={handleImageUpload}
                accept="image/*"
              />
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            variant="contained"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-2 text-white"
            onClick={submitHandler}
          >
            Publish and View
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
