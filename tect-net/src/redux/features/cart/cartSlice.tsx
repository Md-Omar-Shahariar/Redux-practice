import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../../types/globaltype";

interface CartState {
  items: { product: Product; quantity: number }[];
}
const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.product.id === item.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ product: item, quantity: 1 });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
