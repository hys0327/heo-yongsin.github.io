import React, { useState, useEffect } from "react";

const KKST = () => {
  // 현재 시간 상태 관리
  const [currentTime, setCurrentTime] = useState("");

  // 선택된 이미지 상태 관리
  const [selectedImage, setSelectedImage] = useState("green");

  // 이미지와 관련된 색상들
  const colors = ["green", "ivory", "black"];

  // 시간 업데이트 함수
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateClock(); // 초기 시간 설정
    const intervalId = setInterval(updateClock, 60000); // 매 분마다 시간 업데이트

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 클리어
  }, []);

  // 이미지 선택 핸들러
  const handleColorClick = (color) => {
    setSelectedImage(color);
  };

  return (
    <div className="project-container kkst">
      <header>
        <nav>
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
          <div className="btm">
            <div className="logo"></div>
            <div className="icon_wrap">
              <span className="icon share"></span>
              <span className="icon cart"></span>
              <span className="icon search"></span>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div className="thumb-wrap">
          <div className="image-wrap">
            <div className={`image ${selectedImage}`}></div>
          </div>
          <div className="color-chip">
            {colors.map((color) => (
              <div
                key={color}
                className={`color ${color} ${
                  selectedImage === color ? "selected" : ""
                }`}
                onClick={() => handleColorClick(color)}
              ></div>
            ))}
          </div>
        </div>
        <div className="prod-nav">
          <span className="num current">
            {colors.indexOf(selectedImage) + 1}
          </span>
          <span className="num gap">/</span>
          <span className="num maximum">{colors.length}</span>
        </div>
        {/* 전체영역이 버튼 */}
        <div className="brand-nav">
          <span className="name">MERGO</span>
          <span className="icon icon_arrow"></span>
        </div>
        <div className="category-nav">
          <span className="type">상의</span>
          <span className="icon icon_arrow"></span>
          <span className="type">니트</span>
          <span className="icon icon_arrow"></span>
          <span className="type">카라</span>
        </div>
        <div className="prod-title">
          <span className="text">부클 오픈 카라 반팔 니트 5colors</span>
        </div>
        <div className="test">dd</div>
      </main>
      <footer>
        <div className="app_footer">
          <div className="favorite">
            <span className="icon icon_favorite"></span>
          </div>
          <div className="payment">
            <span className="text">구매하기</span>
          </div>
        </div>
        <nav>
          <ul className="nav-items">
            {/* li는 터치를 고려한 영역 */}
            <li className="item">
              <span className="icon nav-arrow"></span>
            </li>
            <li className="item">
              <span className="icon nav-home"></span>
            </li>
            <li className="item">
              <span className="icon nav-menu"></span>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default KKST;
