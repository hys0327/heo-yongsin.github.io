//rafce
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="header-main">
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
    </header>
  );
};

export default Header;
