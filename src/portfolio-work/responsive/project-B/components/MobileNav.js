import React from "react";

const MobileNav = ({
  menuItems,
  handleNavClick,
  activeIndex,
  setPopupState,
}) => {
  return (
    <div className="mobile-menu-wrap">
      <div className="top">
        <button>
          <span
            className="icon icon_close"
            onClick={() => setPopupState({ isVisible: false, type: "" })}
          ></span>
        </button>
      </div>
      <div className="user_wrap">
        <div className="img_bg">
          <span className="icon icon_user"></span>
        </div>
        <div className="user info">
          <span className="text">용용</span>
        </div>
      </div>
      <nav className="mobile-nav">
        <ul>
          {menuItems.map((menu, index) => (
            <li
              key={index}
              className={`nav-item ${activeIndex === index ? "active" : ""}`}
            >
              <button onClick={() => handleNavClick(index)}>{menu}</button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
