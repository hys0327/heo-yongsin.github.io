import React from "react";
import MobileNav from "./MobileNav"; // MobileNav를 여기서 불러옵니다.

const MobileMenuPopup = ({
  menuItems,
  handleNavClick,
  activeIndex,
  setPopupState,
}) => {
  return (
    <div className="mobile-menu-popup">
      {/* MobileNav를 여기서 렌더링합니다 */}
      <MobileNav
        menuItems={menuItems}
        handleNavClick={handleNavClick}
        activeIndex={activeIndex}
        setPopupState={setPopupState}
      />
    </div>
  );
};

export default MobileMenuPopup;
