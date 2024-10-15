import React, { useState, useEffect } from "react";

const CustomSelect = ({ label, options, selectedOption, handleSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSelect = () => {
    console.log("SelectBox 클릭됨");
    setIsOpen(!isOpen);
  };
  return (
    <div className="custom-select">
      <div
        className={`select-box ${isOpen ? "selected" : "notSelected"}`}
        onClick={toggleSelect}
      >
        {selectedOption ? selectedOption.label : label}
        <span className={`arrow ${isOpen ? "up" : "down"}`}></span>
      </div>
      {isOpen && (
        <ul className="options-list">
          {options.map((option, index) => (
            <li
              key={index}
              className="option-item"
              onClick={() => {
                handleSelect(option);
                setIsOpen(false); // 선택 후 닫기
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
