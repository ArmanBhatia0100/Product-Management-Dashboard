import {createSlice} from "@reduxjs/toolkit";

const initialProducts = [
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
    }
  ];

const productSlice = createSlice({
    name:"product",
    initialState:initialProducts,
    reducers:{
        addProduct: (state,actions)=>{
        state.unshift(actions.payload);
        },
        delProduct: (state)=>{}
    }
})
export const {addProduct, delProduct}  = productSlice.actions;
export default productSlice.reducer;