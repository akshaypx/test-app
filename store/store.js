import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice/ProductSlice";
import cartReducer from "./cartSlice/CartSlice";
import favouriteReducer from "./favouriteSlice/FavouriteSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    favourites: favouriteReducer,
  },
});

export default store;
