import React from "react";

const Header = ({ children, viewType }) => {
  console.log(viewType);
  return (
    <div className="header_container">
      <header className="header">
        <div className="h_left">
          <div className="logo"></div>
          <nav className="nav">
            <ul>
              <li className="nav-item active">
                <button>홈</button>
              </li>
              <li className="nav-item">
                <button>시청 중인 콘텐츠</button>
              </li>
              <li className="nav-item">
                <button>콘텐츠</button>
              </li>
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
