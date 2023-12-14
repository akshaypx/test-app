import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productData: {},
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const data = await fetch("https://dummyjson.com/products").then((res) =>
        res.json()
      );
      return data.products;
    } catch (err) {
      console.log(err.message);
    }
  }
);

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async (id) => {
    try {
      const data = await fetch(`https://dummyjson.com/products/${id}`).then(
        (res) => res.json()
      );
      return data;
    } catch (err) {
      console.log(err.message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchProduct.pending, (state) => {
        // state.status = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.productData = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
