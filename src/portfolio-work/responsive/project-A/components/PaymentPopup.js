import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
//
import ColorsSelect from "./ColorsSelect";
import SizesSelect from "./SizesSelect";

const PaymentPopup = ({ setPopupVisible, setView }) => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [quantity, setQuantity] = useState(1); // 기본 수량 1로 설정
  const [openSelect, setOpenSelect] = useState(null); // 열린 select 상태 관리
  //
  const dispatch = useDispatch();

  const colorOptions = [
    { label: { korean: "블랙", english: "black" }, color: "#000000" },
    { label: { korean: "네이비", english: "navy" }, color: "#000080" },
    { label: { korean: "아이보리", english: "ivory" }, color: "#FFFFF0" },
    { label: { korean: "그린", english: "green" }, color: "#008000" },
    { label: { korean: "베이지", english: "beige" }, color: "#F5F5DC" },
  ];

  const sizeOptions = [
    { letterSize: "S", numSize: "90", price: 38900 },
    { letterSize: "M", numSize: "95", price: 38900 },
    { letterSize: "L", numSize: "100", price: 38900 },
    { letterSize: "XL", numSize: "105", price: 38900 },
  ];

  const handleColorSelect = (option) => {
    console.log("option", option);
    setSelectedColor(option.label.korean);
  };

  const handleSizeSelect = (option) => {
    console.log("option", option);
    setSelectedSize(option.letterSize);
    setSelectedPrice(option.price);
  };

  // 수량 증가 핸들러
  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // 수량 감소 핸들러 (0 이하로 줄어들지 않음)
  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  // 선택한 색상, 사이즈, 가격, 수량을 초기화하는 함수
  const handleResetSelection = () => {
    setSelectedColor(""); // 색상 초기화
    setSelectedSize(""); // 사이즈 초기화
    setSelectedPrice(0); // 가격 초기화
    setQuantity(1); // 수량 초기화
  };

  // 장바구니에 아이템 추가
  const handleAddToCart = () => {
    const item = {
      id: new Date().getTime(), // 유니크 ID 생성
      color: selectedColor,
      size: selectedSize,
      price: selectedPrice,
      quantity: quantity,
    };

    // Redux 스토어에 아이템 추가
    dispatch(addToCart(item));

    setView("cart");

    // 팝업 닫기
    setPopupVisible(false);
  };

  return (
    <div className="popup payment">
      <div className="p_header">
        <h1>결제 정보</h1>
        <span
          className="icon icon_close"
          onClick={() => setPopupVisible(false)}
        ></span>
      </div>
      <div className="content_wrap">
        <div className="content color">
          <ColorsSelect
            options={colorOptions}
            handleSelect={handleColorSelect}
            selectedColor={selectedColor}
            isOpen={openSelect === "color"}
            setOpenSelect={() => setOpenSelect("color")} // 열기
            closeSelect={() => setOpenSelect(null)} // 닫기
          />
        </div>
        <div className="content size">
          <SizesSelect
            options={sizeOptions}
            handleSelect={handleSizeSelect}
            selectedSize={selectedSize}
            isOpen={openSelect === "size"}
            setOpenSelect={() => setOpenSelect("size")} // 열기
            closeSelect={() => setOpenSelect(null)} // 닫기
          />
        </div>
        <div className="boundary_line"></div>
        {selectedColor && selectedSize && (
          <div className="content product">
            <h3 className="title">선택 상품</h3>
            <div className="prod_info">
              <div className="prod_top">
                <div className="prod_top_left">
                  <span className="prod_name">부클 오픈 카라 반팔 니트</span>
                  <span className="prod_color">
                    {selectedColor && selectedSize
                      ? `${selectedColor} / ${selectedSize}`
                      : ""}
                  </span>
                </div>
                <div className="prod_top_right">
                  <span
                    className="icon icon_delete"
                    onClick={handleResetSelection}
                  ></span>
                </div>
              </div>
              <div className="prod_btm">
                <div className="prod_btm_left">
                  <span className="minus" onClick={handleDecrease}></span>
                  <span className="num">{quantity}</span>
                  <span className="plus" onClick={handleIncrease}></span>
                </div>
                <div className="prod_btm_right">
                  <span className="amount">
                    {selectedPrice
                      ? (selectedPrice * quantity).toLocaleString()
                      : "0"}
                    원
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedColor && selectedSize && (
          <>
            <div className="boundary_line footer"></div>
            <div className="footer-wrap">
              <div className="top">
                <h2 className="payment_amount">총 결제 금액</h2>
                <span className="amount">
                  {selectedPrice
                    ? (selectedPrice * quantity).toLocaleString()
                    : "0"}
                  원
                </span>
              </div>
              <div className="btm">
                <button onClick={handleAddToCart}>장바구니 담기</button>
                <button>바로 구매하기</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentPopup;
