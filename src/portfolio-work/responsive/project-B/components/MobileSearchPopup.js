import React from "react";

const MobileSearchPopup = ({ setPopupState }) => {
  return (
    <div className="mobile-search-container">
      <div className="search-wrap">
        <button
          className="popup-close-btn"
          onClick={() => setPopupState({ isVisible: false, type: "" })}
        >
          <span className="icon icon_arrow"></span>
        </button>
        <div className="search_input">
          <label htmlFor="">
            <input
              type="text"
              id=""
              placeholder="영화 제목, 드라마 제목 등 검색"
            />
            <button>
              <span className="icon icon_search"></span>
            </button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default MobileSearchPopup;
