import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Netflix from "./Netflix";

const AppNetflix = ({ viewType }) => {
  return (
    <Provider store={store}>
      <Netflix viewType={viewType} />
    </Provider>
  );
};

export default AppNetflix;
