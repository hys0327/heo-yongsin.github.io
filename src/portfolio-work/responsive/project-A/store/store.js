import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
// 스토어 설정
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
