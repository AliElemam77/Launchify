import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
  const respones = await axios.get("https://fakestoreapi.com/carts");
  // console.log(respones.data);
  return respones.data;
});
export const addToCart = createAsyncThunk("cart/addToCart", async (product) => {
  const userId = localStorage.getItem("userId");

  const response = await axios.post("https://fakestoreapi.com/carts", {
    userId: parseInt(userId),
    products: [product], // لازم يكون array
  });

  // console.log(response.data);
  return response.data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.cartItems = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = "Error fetching cart items";
      })
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.cartItems.push(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = "Error adding item to cart";
      });
  },
});

export default cartSlice.reducer;
