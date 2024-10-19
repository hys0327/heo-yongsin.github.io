import React, { useState } from "react";

const Header = ({ children, viewType, handleScroll }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // 메뉴 항목 클릭 시 activeIndex 변경
  const handleNavClick = (index) => {
    setActiveIndex(index);
    handleScroll(index);
  };

  const menuItems = ["홈", "시청 중인 콘텐츠", "콘텐츠"];

  return (
    <div className="header_container">
      <header className="header">
        <div className="h_left">
          <div className="logo"></div>
          <nav className="nav">
            <ul>
              {menuItems.map((menu, index) => (
                <li
                  key={index}
                  className={`nav-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <button onClick={() => handleNavClick(index)}>{menu}</button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="h_right">
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
        </div>
      </header>
    </div>
  );
};

export default Header;
