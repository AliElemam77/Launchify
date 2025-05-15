import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  loading: false,
  error: null,
};
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products", {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
    return response.data;
  }
);
const getProductDetails = createAsyncThunk(
  "products/getProductDetails",
  async (id) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${id}`,
      {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }
    );
    return response.data;
  }
);

const allProductSlice = createSlice({
  name: "Products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = false;
        state.error = "Error Getting Products";
      });
  },
});

export default allProductSlice.reducer;
