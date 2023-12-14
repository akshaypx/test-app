import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
  status: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // If the item is already in the cart, update its count
        existingItem.count += 1;
      } else {
        // If the item is not in the cart, add it
        state.cartItems.push({ ...action.payload, count: 1 });
      }

      state.totalItems += 1;
      state.totalPrice += action.payload.price;
    },
    removeItemFromCart: (state, action) => {
      const removedItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (removedItem) {
        state.totalItems -= removedItem.count;
        state.totalPrice -= removedItem.count * removedItem.price;
      }

      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    increaseItemCount: (state, action) => {
      const itemToIncrease = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (itemToIncrease) {
        itemToIncrease.count += 1;
        state.totalItems += 1;
        state.totalPrice += itemToIncrease.price;
      }
    },
    decreaseItemCount: (state, action) => {
      const itemToDecrease = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (itemToDecrease) {
        if (itemToDecrease.count > 1) {
          itemToDecrease.count -= 1;
          state.totalItems -= 1;
          state.totalPrice -= itemToDecrease.price;
        } else {
          // If count is less than one, remove the item from cartItems
          state.totalItems -= 1;
          state.totalPrice -= itemToDecrease.price;
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  increaseItemCount,
  decreaseItemCount,
} = cartSlice.actions;

export default cartSlice.reducer;
