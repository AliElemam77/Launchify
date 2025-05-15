import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import productSlice from "./slice/allProductsSlice";
import productDetailsSlice from "./slice/productDetailsSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productSlice,
    productDetails: productDetailsSlice,
  },
});
