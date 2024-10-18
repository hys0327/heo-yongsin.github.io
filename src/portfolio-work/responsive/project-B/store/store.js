import { configureStore } from "@reduxjs/toolkit";
import topContentReducer from "../features/topContentSlice";

// 스토어 설정
const store = configureStore({
  reducer: {
    topContent: topContentReducer,
  },
});

export default store;
