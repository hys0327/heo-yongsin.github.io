import React from "react";

const MobileNav = ({ menuItems, handleNavClick, activeIndex }) => {
  return (
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
  );
};

export default MobileNav;
