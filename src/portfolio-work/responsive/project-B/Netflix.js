import React, { useEffect } from "react";
import MobileNav from "./components/MobileNav";
import Header from "./components/Header";
import Main from "./components/Main";

const Netflix = ({ viewType }) => {
  console.log(viewType);
  return (
    <div className="wrap">
      <div className="project-container netflix">
        <Header viewType={viewType}>
          {viewType === "mobile" ? <MobileNav /> : null}
        </Header>
        <Main />
        {/* <footer>푸터입니다.</footer> */}
      </div>
    </div>
  );
};

export default Netflix;
