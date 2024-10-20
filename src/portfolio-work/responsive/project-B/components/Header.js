import React, { useState, useEffect } from "react";
import MobileNav from "./MobileNav";

const Header = ({ children, viewType, handleScroll }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState("");
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  // 메뉴 항목 클릭 시 activeIndex 변경
  const handleNavClick = (index) => {
    setActiveIndex(index);
    handleScroll(index);
    setMobileNavVisible(false);
  };

  const menuItems = ["홈", "시청 중인 콘텐츠", "콘텐츠"];

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

  const toggleMobileNav = () => {
    setMobileNavVisible(!mobileNavVisible);
  };

  return (
    <div className="header_container">
      <header className="header">
        {viewType === "mobile" ? (
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
        ) : (
          ""
        )}
        <div className="btm">
          <div className="h_left">
            <div className="logo"></div>
            {viewType === "mobile" ? (
              ""
            ) : (
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
            {viewType !== "mobile" && (
              <div className="search_bar">
                <input type="text" placeholder="검색어를 입력해주세요." />
                <span className="icon icon_search"></span>
              </div>
            )}
            {viewType === "mobile" ? (
              <>
                <div className="search">
                  <span className="icon icon_search"></span>
                </div>
                <div className="mobile-menu" onClick={toggleMobileNav}>
                  <span className="icon icon_menu"></span>
                </div>
                {mobileNavVisible && (
                  <MobileNav
                    menuItems={menuItems}
                    handleNavClick={handleNavClick}
                    activeIndex={activeIndex}
                  />
                )}
              </>
            ) : (
              <div className="user_wrap">
                <div className="img_bg">
                  <span className="icon icon_user"></span>
                </div>
                <span className="icon icon_arrow"></span>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
