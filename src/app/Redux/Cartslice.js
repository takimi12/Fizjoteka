import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const { _id, title, price, imageFileUrl } = action.payload;
      const existingItem = state.find((item) => item._id === _id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ _id, title, price, imageFileUrl, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const { _id } = action.payload;
      const existingItem = state.find((item) => item._id === _id);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          return state.filter((item) => item._id !== _id);
        } else {
          existingItem.quantity -= 1;
        }
      }
    },
    removeAllFromCart(state, action) {
      const { _id } = action.payload;
      return state.filter((item) => item._id !== _id);
    },
  },
});

// Selektor do obliczania całkowitej ceny
export const selectTotalPrice = (state) => 
  state.cart.reduce((total, item) => total + item.price * item.quantity, 0);

export const { addToCart, removeFromCart, removeAllFromCart } = cartSlice.actions;
export default cartSlice.reducer;
