import React, { useEffect, useRef } from "react";
import MobileNav from "./components/MobileNav";
import Header from "./components/Header";
import Main from "./components/Main";

const Netflix = ({ viewType }) => {
  console.log(viewType);

  // scroll-y 이동 기능 ref
  const homeRef = useRef(null);
  const watchHistoryRef = useRef(null);
  const contentsRef = useRef(null);

  // 스크롤 함수
  const handleScroll = (index) => {
    if (index === 0) {
      homeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (index === 1) {
      watchHistoryRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (index === 2) {
      contentsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="wrap">
      <div className="project-container netflix">
        <Header viewType={viewType} handleScroll={handleScroll}>
          {viewType === "mobile" ? <MobileNav /> : null}
        </Header>
        <Main
          homeRef={homeRef}
          watchHistoryRef={watchHistoryRef}
          contentsRef={contentsRef}
        />
        {/* <footer>푸터입니다.</footer> */}
      </div>
    </div>
  );
};

export default Netflix;
