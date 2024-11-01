import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./productSlice.js"

export default configureStore({
  reducer: {
    product:productReducer
  },
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())