import React, { useEffect, useState } from "react";

const Header = ({
  viewType,
  handleScroll,
  setPopupState,
  menuItems,
  activeIndex,
  handleNavClick,
}) => {
  const [currentTime, setCurrentTime] = useState("");

  // 현재 시간 업데이트
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateClock();
    const intervalId = setInterval(updateClock, 60000);

    return () => clearInterval(intervalId);
  }, []);

  // 팝업 토글 함수
  const togglePopup = (popupType) => {
    setPopupState((prevState) => ({
      isVisible: !prevState.isVisible,
      type: popupType,
    }));
  };

  return (
    <div className="header_container">
      <header className="header">
        {viewType === "mobile" && (
          <div className="top">
            <div className="time">
              <span className="text">{currentTime}</span>
            </div>
            <div className="icon_wrap">
              <span className="icon wifi"></span>
              <span className="icon status"></span>
              <span className="icon battery"></span>
            </div>
          </div>
        )}
        <div className="btm">
          <div className="h_left">
            <div className="logo"></div>
            {viewType !== "mobile" && (
              <nav className="nav">
                <ul>
                  {menuItems.map((menu, index) => (
                    <li
                      key={index}
                      className={`nav-item ${
                        activeIndex === index ? "active" : ""
                      }`}
                    >
                      <button onClick={() => handleNavClick(index)}>
                        {menu}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
          <div className="h_right">
            {viewType !== "mobile" ? (
              <>
                <div className="search_bar">
                  <input type="text" placeholder="검색어를 입력해주세요." />
                  <span className="icon icon_search"></span>
                </div>
                <div className="user_wrap">
                  <div className="img_bg">
                    <span className="icon icon_user"></span>
                  </div>
                  <span className="icon icon_arrow"></span>
                </div>
              </>
            ) : (
              <>
                <div className="search" onClick={() => togglePopup("search")}>
                  <span className="icon icon_search"></span>
                </div>
                <div
                  className="mobile-menu"
                  onClick={() => togglePopup("menu")}
                >
                  <span className="icon icon_menu"></span>
                </div>
              </>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
