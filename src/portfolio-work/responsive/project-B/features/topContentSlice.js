import { createSlice } from "@reduxjs/toolkit";

// 초기 상태 정의
const initialState = {
  currentIndex: 0, // 슬라이더의 현재 인덱스 (기본값 0)
  topContents: [], // 상위 10개의 콘텐츠 목록
};

// 슬라이스 생성
const topContentSlice = createSlice({
  name: "topContent",
  initialState,
  reducers: {
    // 슬라이더 인덱스 업데이트
    setCurrentIndex: (state, action) => {
      state.currentIndex = action.payload;
    },
    // 상위 10개의 콘텐츠 설정
    setTopContents: (state, action) => {
      state.topContents = action.payload;
    },
  },
});

// 액션 및 리듀서 추출
export const { setCurrentIndex, setTopContents } = topContentSlice.actions;
export default topContentSlice.reducer;
