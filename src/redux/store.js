import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import productSlice from "./slice/allProductsSlice";
import productDetailsSlice from "./slice/productDetailsSlice";
import cartSlice from "./slice/cartSilce";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productSlice,
    productDetails: productDetailsSlice,
    cart: cartSlice,
  },
});
