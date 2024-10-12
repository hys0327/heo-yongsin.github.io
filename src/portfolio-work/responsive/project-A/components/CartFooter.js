import React from "react";
import { useSelector } from "react-redux";

const CartFooter = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <footer className="f_cart">
      <div className="app_footer">
        <div className="payment">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div className="amount-wrap" key={item.id}>
                <span className="amount">
                  {(item.price * item.quantity).toLocaleString()}원
                </span>
                <span className="text">결제하기</span>
              </div>
            ))
          ) : (
            <div className="amount-wrap notItems">
              <span className="text notItems">선택한 상품이 없습니다.</span>
            </div>
          )}
        </div>
      </div>
      <nav>
        <ul className="nav-items">
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
  );
};

export default CartFooter;
