//rafce
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // 메뉴를 닫는 함수
  const handleMenuClick = () => {
    setMenuOpen(false); // 메뉴를 닫음
  };

  return (
    <header>
      <div className="header-main desktop">
        <div className="wrapper">
          <div className="content">
            <div className="image-container">
              <h2 className="header-name">화면개발자 허용신입니다.</h2>
              <img
                src={`${process.env.PUBLIC_URL}/images/profile-img.jpg`}
                alt="프로필 사진"
                style={{ width: "200px", height: "auto" }}
              />
            </div>
            <nav className="nav-menu">
              <ul>
                <li className="home">
                  <button onClick={() => navigate("/")}>
                    <span className="icon"></span>
                    <span className="text">Home</span>
                  </button>
                </li>
                <li className="about">
                  <button onClick={() => navigate("/about")}>
                    <span className="icon"></span>
                    <span className="text">About Me</span>
                  </button>
                </li>
                <li className="resume">
                  <button onClick={() => navigate("/resume")}>
                    <span className="icon"></span>
                    <span className="text">Resume</span>
                  </button>
                </li>
                <li className="portfolio">
                  <button onClick={() => navigate("/portfolio")}>
                    <span className="icon"></span>
                    <span className="text">Portfolio</span>
                  </button>
                </li>
              </ul>
            </nav>
            <div className="nav-footer"></div>
          </div>
        </div>
      </div>
      <div className="header-main mobile">
        <div className="logo">
          <span className="img"></span>
          <span className="text">Yongsin</span>
        </div>
        <div className="menu">
          <span className="icon icon_hambuger" onClick={toggleMenu}></span>
        </div>
      </div>
      <nav className={`nav-m-menu ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <button
              onClick={() => {
                navigate("/");
                handleMenuClick();
              }}
              className={location.pathname === "/" ? "active" : ""}
            >
              <span className="text">Home</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/about");
                handleMenuClick();
              }}
              className={location.pathname === "/about" ? "active" : ""}
            >
              <span className="text">About</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/resume");
                handleMenuClick();
              }}
              className={location.pathname === "/resume" ? "active" : ""}
            >
              <span className="text">Resume</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/portfolio");
                handleMenuClick();
              }}
              className={location.pathname === "/portfolio" ? "active" : ""}
            >
              <span className="text">Portfolio</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
