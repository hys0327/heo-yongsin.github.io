import React, { useState, useEffect } from "react";

const SizesSelect = ({
  options,
  handleSelect,
  selectedSize,
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
    if (selectedSize === "") {
      setSelectedOption(null); // selectedSize가 빈 값이면 selectedOption도 초기화
    } else {
      const option = options.find((opt) => opt.letterSize === selectedSize);
      setSelectedOption(option || null);
    }
  }, [selectedSize, options]);

  useEffect(() => {
    console.log("options", options);
    console.log("selectedSize", selectedSize);
    console.log("isOpen", isOpen);
    console.log("closeSelect", closeSelect);
  }, []);

  return (
    <div className="select size">
      <div
        // className="selectedOption"
        className={`selectedOption ${isOpen ? "selected" : "notSelected"}`}
        onClick={() => (isOpen ? closeSelect() : setOpenSelect())}
      >
        {selectedOption ? (
          <>
            <div className="left">
              <span className="text">{selectedOption.letterSize}</span>
              <span className="text">/</span>
              <span className="text">{selectedOption.numSize}</span>
            </div>
            <div className="right">
              <span className="icon icon_arrow"></span>
            </div>
          </>
        ) : (
          "사이즈 선택"
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
              <div className="text-wrap">
                <div className="left">
                  <span className="text letterSize">{option.letterSize}</span>
                  <span className="text">/</span>
                  <span className="text numSize">{option.numSize}</span>
                </div>
                <div className="right">
                  <span className="amount">
                    {option.price.toLocaleString()}원
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SizesSelect;
