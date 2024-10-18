import React from "react";

const MobileNav = () => {
  return (
    <nav className="mobile-nav">
      <ul>
        <li>
          <a href="#home">홈</a>
        </li>
        <li>
          <a href="#tv-shows">TV 프로그램</a>
        </li>
        <li>
          <a href="#movies">영화</a>
        </li>
        <li>
          <a href="#new">NEW & 인기</a>
        </li>
        <li>
          <a href="#my-list">내가 찜한 콘텐츠</a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
