import React, { useState, useEffect } from "react";

const SkillBar = ({ skill, percentage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setProgress(percentage);
    }, 100); // 0.1초 후 애니메이션 시작

    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 정리
  }, [percentage]);

  return (
    <div className="skill-container">
      <div className="progress-info">
        <span>{skill}</span>
        <span>{progress}%</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${progress}%`,
            transition: "width 1.5s ease-in-out",
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
