import React, { useState } from "react";

const Cart = () => {
  const [selectedDelivery, setSelectedDelivery] = useState("today");

  const handleDeliveryChange = (value) => {
    setSelectedDelivery(value);
  };

  return (
    <div className="cart-view">
      <div className="delivery-info">
        <div className="item way">
          <div className="left">
            <h2>
              직진배송 배송방법<span className="icon icon_quesMark"></span>
            </h2>
          </div>
          <div className="right">
            <span className="icon icon_info"></span>
            <span className="text">서울지역 기준</span>
          </div>
        </div>
        <div className="item today">
          <div className="left">
            <label className="custom-checkbox">
              <input
                type="checkbox"
                name="delivery"
                value="today"
                checked={selectedDelivery === "today"}
                onChange={() => handleDeliveryChange("today")}
              />
              <span className="checkbox-label"></span>
              <span className="text">오늘(수) 밤 12시 전 도착</span>
            </label>
          </div>
          <div className="right">
            <span className="text">990원</span>
          </div>
        </div>
        <div className="item tomorrow">
          <div className="left">
            <label className="custom-checkbox">
              <input
                type="checkbox"
                name="delivery"
                value="tomorrow"
                checked={selectedDelivery === "tomorrow"}
                onChange={() => handleDeliveryChange("tomorrow")}
              />
              <span className="checkbox-label"></span>
              <span className="text">내일(목) 도착</span>
            </label>
          </div>
          <div className="right">
            <span className="text">무료</span>
          </div>
        </div>
      </div>
      <div className="delivery-prod">
        <div className="header">
          <h2>주문상품</h2>
          <span className="icon icon_arrow"></span>
        </div>
        <div className="item-wrap">
          <div className="left">
            <div className="prod-img"></div>
            <div className="prod-info">
              <span className="text">부클 오픈 카라 반팔 니트</span>
              <span className="text">사이즈 : L / 100</span>
              <span className="text">색상 : 그린</span>
              <span className="text">수량 : 2개</span>
            </div>
          </div>
          <div className="right">
            <div className="prod-payment">
              <span className="amount origin">101,800</span>
              <span className="amount">70,000</span>
            </div>
          </div>
        </div>
      </div>
      <div className="sale-wrap">
        <div className="header">
          <h2>
            할인<span className="icon icon_quesMark"></span>
          </h2>
        </div>
        <div className="item-wrap coupon">
          <div className="item coupon">
            <span className="text">쿠폰</span>
            <div className="available">
              <span className="text">사용 가능</span>
              <span className="text">1장</span>
              <span className="icon icon_arrow"></span>
            </div>
          </div>
          <div className="item repCoupon">
            <span className="text">중복쿠폰</span>
            <div className="available">
              <span className="text">보유</span>
              <span className="text">0장</span>
            </div>
          </div>
        </div>
        <div className="item-wrap mileage">
          <div className="item mileage">
            <div className="top">
              <span className="text">마일리지</span>
              <div className="box">
                <span className="amount">0</span>
              </div>
              <button>전액사용</button>
            </div>
            <div className="btm">
              <span className="text">사용가능 : 0M</span>
              <span className="text">/</span>
              <span className="text">보유 : 0M</span>
            </div>
          </div>
          <div className="item point">
            <div className="top">
              <span className="text">포인트</span>
              <div className="box">
                <span className="amount">0</span>
              </div>
              <button>전액사용</button>
            </div>
            <div className="btm">
              <span className="text">보유 : 0P</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
