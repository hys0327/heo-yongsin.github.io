import React, { useState, useEffect } from "react";

const ColorsSelect = ({
  options,
  handleSelect,
  selectedColor,
  isOpen,
  setOpenSelect,
  closeSelect,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    handleSelect(option);
    closeSelect();
  };

  // selectedSize가 변경될 때 selectedOption도 업데이트
  useEffect(() => {
    if (selectedColor === "") {
      setSelectedOption(null); // selectedSize가 빈 값이면 selectedOption도 초기화
    } else {
      const option = options.find((opt) => opt.label.korean === selectedColor);
      setSelectedOption(option || null);
    }
  }, [selectedColor, options]);

  return (
    <div className="select color">
      <div
        // className="selectedOption"
        className={`selectedOption ${isOpen ? "selected" : "notSelected"}`}
        onClick={() => (isOpen ? closeSelect() : setOpenSelect())}
      >
        {selectedOption ? (
          <>
            <div className="left">
              <span
                className="colorChip"
                style={{ backgroundColor: selectedOption.color }}
              ></span>
              <div className="text-wrap">
                <span className="text">{selectedOption.label.korean}</span>
                <span className="text">/</span>
                <span className="text">{selectedOption.label.english}</span>
              </div>
            </div>
            <div className="right">
              <span className="icon icon_arrow"></span>
            </div>
          </>
        ) : (
          "색상 선택"
        )}
      </div>
      {isOpen && (
        <ul className="options">
          {options.map((option, index) => (
            <li
              key={index}
              className="option-item"
              onClick={() => handleOptionClick(option)}
            >
              <span
                className="colorChip"
                style={{ backgroundColor: option.color }}
              ></span>
              <div className="text-wrap">
                <span className="text">{option.label.korean}</span>
                <span className="text">{option.label.english}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ColorsSelect;
