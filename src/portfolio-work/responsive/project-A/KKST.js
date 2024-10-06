import React, { useState, useEffect } from "react";

const KKST = () => {
  // 현재 시간 상태 관리
  const [currentTime, setCurrentTime] = useState("");

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
              <span className="icon a"></span>
              <span className="icon b"></span>
              <span className="icon c"></span>
            </div>
          </div>
        </nav>
      </header>
      <main>gg</main>
      <footer>
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
