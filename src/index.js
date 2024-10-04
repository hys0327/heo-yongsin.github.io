import React from "react";
import ReactDOM from "react-dom/client"; // React 18에서 createRoot 사용
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("portfolio"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

/* 
  Provider
  - redux 스토어를 react 컴포넌트 트리의 최상단에 위치시킴으로써, 어디서든지 사용가능
  - 스토어와 컴포넌트 연결
  - useSelector, useDispatch 를 통해 스토어와 리덕스 통신 가능하게해줌
*/
