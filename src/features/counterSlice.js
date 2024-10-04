import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  // 초기 상태 설정
  initialState: {
    value: 0,
  },
  // 상태 변경을 위한 리듀서 함수
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
// 액션 생성자 -> dispatch 시 사용
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 리듀서를 내보냄 (스토어에 추가)
export default counterSlice.reducer;
