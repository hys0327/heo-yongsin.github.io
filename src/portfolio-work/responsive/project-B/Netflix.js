import React, { useState, useRef } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import MobileSearchPopup from "./components/MobileSearchPopup";
import MobileMenuPopup from "./components/MobileMenuPopup";

const Netflix = ({ viewType }) => {
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

  const menuItems = ["홈", "시청 중인 콘텐츠", "콘텐츠"];
  const [activeIndex, setActiveIndex] = useState(0); // 현재 활성화된 메뉴
  const [popupState, setPopupState] = useState({
    isVisible: false,
    type: "",
  });

  // 메뉴 항목 클릭 시 동작
  const handleNavClick = (index) => {
    setActiveIndex(index);
    handleScroll(index); // 스크롤 이동
    setPopupState({ isVisible: false, type: "" }); // 메뉴 클릭 후 팝업 닫기
  };

  // 팝업 렌더링 함수
  const renderPopup = () => {
    if (!popupState.isVisible) return null;
    switch (popupState.type) {
      case "search":
        return <MobileSearchPopup setPopupState={setPopupState} />;
      case "menu":
        return (
          <MobileMenuPopup
            menuItems={menuItems}
            handleNavClick={handleNavClick}
            activeIndex={activeIndex}
            setPopupState={setPopupState}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="wrap">
      {popupState.isVisible && viewType === "mobile" && (
        <div className="popup-container">
          <div className="dimmed"></div>
          {renderPopup()}
        </div>
      )}
      <div className="project-container netflix">
        <Header
          viewType={viewType}
          handleScroll={handleScroll}
          menuItems={menuItems}
          activeIndex={activeIndex}
          handleNavClick={handleNavClick}
          setPopupState={setPopupState}
        />
        <Main
          homeRef={homeRef}
          watchHistoryRef={watchHistoryRef}
          contentsRef={contentsRef}
          viewType={viewType}
        />
        {viewType === "mobile" && (
          <div className="footer_container">
            <footer>
              <nav>
                <ul className="nav-items">
                  <li className="item">
                    <span className="icon nav-arrow"></span>
                  </li>
                  <li className="item">
                    <span className="icon nav-home"></span>
                  </li>
                  <li className="item">
                    <span className="icon nav-menu"></span>
                  </li>
                </ul>
              </nav>
            </footer>
          </div>
        )}
      </div>
    </div>
  );
};

export default Netflix;
