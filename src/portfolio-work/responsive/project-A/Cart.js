import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./features/cartSlice"; // clearCart 액션 가져오기

const Cart = () => {
  const dispatch = useDispatch();
  const [selectedDelivery, setSelectedDelivery] = useState("today");
  //
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleDeliveryChange = (value) => {
    setSelectedDelivery(value);
  };

  console.log("cartItems", cartItems);

  // 컴포넌트 언마운트 시 장바구니 초기화
  useEffect(() => {
    return () => {
      // 컴포넌트가 언마운트되면 clearCart 호출
      dispatch(clearCart());
    };
  }, [dispatch]);

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
        {/* <div className="header"> */}
        <div className={cartItems.length === 0 ? "header notItems" : "header"}>
          <h2>주문상품</h2>
          {cartItems.length > 0 ? (
            <span className="icon icon_arrow bottom"></span>
          ) : (
            <span className="icon icon_arrow top"></span>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="item-wrap">
            <div className="left">
              <div className="prod-img"></div>
              {cartItems.length > 0 &&
                cartItems.map((item) => (
                  <div className="prod-info" key={item.id}>
                    <span className="text">부클 오픈 카라 반팔 니트</span>
                    <span className="text">{`사이즈 : ${item.size} / ${
                      item.size === "L"
                        ? "100"
                        : item.size === "M"
                        ? "95"
                        : item.size === "S"
                        ? "90"
                        : ""
                    }`}</span>
                    <span className="text">{`색상 : ${item.color}`}</span>
                    <span className="text">{`수량 : ${item.quantity}`}</span>
                  </div>
                ))}
            </div>
            <div className="right">
              {cartItems.length > 0 &&
                cartItems.map((item) => (
                  <div className="prod-payment" key={item.id}>
                    {/* 기존 금액 (할인 전 가격이나 다른 정보라면 item에 해당 값이 있어야 함) */}
                    <span className="amount origin">{`${(
                      50750 * item.quantity
                    ).toLocaleString()}원`}</span>
                    {/* 실제 결제 금액 */}
                    <span className="amount">
                      {(item.price * item.quantity).toLocaleString()}원
                    </span>
                  </div>
                ))}
            </div>
          </div>
        )}
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
