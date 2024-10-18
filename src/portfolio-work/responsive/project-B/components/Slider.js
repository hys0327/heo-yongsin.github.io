import React, { useState } from "react";

const Slider = ({
  selectedIndex,
  setSelectedIndex,
  contents,
  currentIndex,
}) => {
  // 선택된 슬라이더를 변경하는 함수
  const handleSliderClick = (index) => {
    setSelectedIndex(index);
  };

  console.log("currentIndex", currentIndex);

  return (
    <>
      <div
        className="slider"
        style={{
          transform: `translateX(-${currentIndex * 20}%)`,
          transition: "transform 0.5s ease",
        }}
      >
        {contents.map((content, index) => (
          <div
            key={index}
            className={`slider-item ${selectedIndex === index ? "active" : ""}`}
            onClick={() => handleSliderClick(index)}
          >
            <div className="left">
              <h3>{content.title}</h3>
              <p className="text category">{content.category.join(", ")}</p>
              <p className="text comment">{content.comment}</p>
            </div>
            <div className="right">
              <div
                // className="img img_rank1"
                className={`img ${content.img}`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Slider;
