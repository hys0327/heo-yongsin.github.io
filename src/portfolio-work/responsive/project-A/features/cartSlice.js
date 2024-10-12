import { createSlice } from "@reduxjs/toolkit";

// 초기 상태 정의
const initialState = {
  cartItems: [], // 장바구니에 담긴 아이템 리스트
};

// 슬라이스 생성
const cartSlice = createSlice({
  name: "cart",
  initialState,
  // 상태를 업데이트하는 함수의 모음
  // 상태 변경 함수
  //
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload); // 새로운 아이템을 장바구니에 추가
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      ); // 아이템 제거
    },
    clearCart: (state) => {
      state.cartItems = []; // 장바구니 비우기
    },
  },
});

// 액션 및 리듀서 추출
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
