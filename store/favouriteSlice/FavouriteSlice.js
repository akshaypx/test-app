import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favouriteIds: [],
  favouriteProducts: [],
};

const favouriteSlice = createSlice({
  name: "favourites",
  initialState: initialState,
  reducers: {
    addToFavourites: (state, action) => {
      const product = action.payload;
      const productId = product.id;

      if (!state.favouriteIds.includes(productId)) {
        state.favouriteIds.push(productId);
        state.favouriteProducts.push(product);
      }
    },
    removeFromFavourites: (state, action) => {
      const productId = action.payload;
      const index = state.favouriteIds.indexOf(productId);

      if (index !== -1) {
        state.favouriteIds.splice(index, 1);
        state.favouriteProducts.splice(index, 1);
      }
    },
    toggleFavorite: (state, action) => {
      const product = action.payload;
      const productId = product.id;

      const index = state.favouriteIds.indexOf(productId);

      if (index !== -1) {
        state.favouriteIds.splice(index, 1);
        state.favouriteProducts.splice(index, 1);
      } else {
        state.favouriteIds.push(productId);
        state.favouriteProducts.push(product);
      }
    },
  },
});

export const { addToFavourites, removeFromFavourites, toggleFavorite } =
  favouriteSlice.actions;

export default favouriteSlice.reducer;
