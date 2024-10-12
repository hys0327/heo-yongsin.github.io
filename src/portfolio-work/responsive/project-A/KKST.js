import React, { useState, useEffect, useRef } from "react";
import Home from "./Home";
import Cart from "./Cart";
import SizePopup from "./components/SizePopup";
import PaymentPopup from "./components/PaymentPopup";

const KKST = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [selectedImage, setSelectedImage] = useState("green");
  const [view, setView] = useState("home"); // 화면 전환 상태 관리
  const [isPopupVisible, setPopupVisible] = useState(false); // 팝업 창 상태
  const [clickedButton, setClickedButton] = useState(""); // 클릭한 버튼 종류
  const [selectedProduct, setSelectedProduct] = useState(""); // 선택한 상품
  const [selectedSize, setSelectedSize] = useState(""); // 선택한 사이즈

  const colors = ["green", "ivory", "black"];
  const productData = {
    르아르: {
      name: "에브리데이 케이블 카라 반팔 니트 - 7colors",
      purchasedSize: 95, // 사용자가 구매한 사이즈
      sizes: {
        90: {
          totalLength: 100,
          shoulderWidth: 40,
          chestWidth: 50,
          sleeveLength: 60,
        },
        95: {
          totalLength: 105,
          shoulderWidth: 42,
          chestWidth: 52,
          sleeveLength: 62,
        },
        100: {
          totalLength: 110,
          shoulderWidth: 44,
          chestWidth: 54,
          sleeveLength: 64,
        },
      },
    },
    카멜워크: {
      name: "웨이크보드 반팔티셔츠",
      purchasedSize: 90, // 사용자가 구매한 사이즈
      sizes: {
        90: {
          totalLength: 102,
          shoulderWidth: 41,
          chestWidth: 51,
          sleeveLength: 61,
        },
        95: {
          totalLength: 107,
          shoulderWidth: 43,
          chestWidth: 53,
          sleeveLength: 63,
        },
        100: {
          totalLength: 112,
          shoulderWidth: 45,
          chestWidth: 55,
          sleeveLength: 65,
        },
      },
    },
    로얄라이프: {
      name: "RL701 비 더 프렌즈 반팔",
      purchasedSize: "90", // 사용자가 구매한 사이즈
      sizes: {
        90: {
          totalLength: 85,
          shoulderWidth: 38,
          chestWidth: 48,
          sleeveLength: 20,
        },
        95: {
          totalLength: 90,
          shoulderWidth: 40,
          chestWidth: 50,
          sleeveLength: 22,
        },
        100: {
          totalLength: 95,
          shoulderWidth: 42,
          chestWidth: 52,
          sleeveLength: 24,
        },
      },
    },
  };

  // purchasedProducts를 productData에서 동적으로 추출
  const purchasedProducts = Object.keys(productData).map((key) => ({
    name: key, // 제품명
    sizes: productData[key].sizes, // 해당 제품의 사이즈 배열
  }));

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateClock();
    const intervalId = setInterval(updateClock, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const handleColorClick = (color) => {
    setSelectedImage(color);
  };

  // 장바구니 클릭 핸들러
  const handleCartClick = () => {
    setView("cart");
  };

  // 로고 클릭 핸들러 (홈으로 돌아가기)
  const handleLogoClick = () => {
    setView("home");
  };

  // 팝업에서 상품 선택 핸들러
  const handleProductSelectFromPopup = (product) => {
    setSelectedProduct(product.name); // 상품 선택
    setSelectedSize(""); // 사이즈 초기화
    setPopupVisible(false); // 팝업 닫기
  };

  // 사이즈 선택 핸들러
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const renderPage = () => {
    switch (view) {
      case "home":
        return (
          <Home
            selectedImage={selectedImage}
            handleColorClick={handleColorClick}
            colors={colors}
            selectedProduct={selectedProduct} // 선택된 상품 전달
            selectedSize={selectedSize} // 선택된 사이즈 전달
            handleSizeSelect={handleSizeSelect} // 사이즈 선택 핸들러 전달
            setPopupVisible={setPopupVisible} // 팝업 상태 관리 전달
            productData={productData} // 제품 데이터 전달
            setClickedButton={setClickedButton}
          />
        );
      case "cart":
        return <Cart />;
      default:
        return <Home />;
    }
  };
  const renderPopup = () => {
    switch (clickedButton) {
      case "size":
        return (
          <SizePopup
            setPopupVisible={setPopupVisible}
            purchasedProducts={purchasedProducts}
            productData={productData}
            handleProductSelectFromPopup={handleProductSelectFromPopup}
            selectedProduct={selectedProduct}
          />
        );
      case "payment":
        return (
          <PaymentPopup
            setPopupVisible={setPopupVisible}
            // 필요한 props 추가
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="wrap">
      {isPopupVisible && (
        <div className="popup-container">
          <div className="dimmed"></div>
          {renderPopup()}
        </div>
      )}
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
              <div className="logo" onClick={handleLogoClick}></div>{" "}
              {/* 로고 클릭 시 홈으로 이동 */}
              <div className="icon_wrap">
                <span className="icon share"></span>
                <span
                  className="icon cart"
                  onClick={handleCartClick}
                ></span>{" "}
                {/* 장바구니 클릭 */}
                <span className="icon search"></span>
              </div>
            </div>
          </nav>
        </header>

        <main style={{ background: view === "cart" ? "#eee" : "transparent" }}>
          {renderPage()}
        </main>
        {view === "cart" && (
          <footer className="f_cart">
            <div className="app_footer">
              <div
                className="payment"
                // onClick={() => {
                //   setPopupVisible(true);
                //   setClickedButton("payment");
                // }}
              >
                <div className="amount-wrap">
                  <span className="amount">70,000원</span>
                  <span className="text">결제하기</span>
                </div>
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
        )}
        {view === "home" && (
          <footer className="f_home">
            <div className="app_footer">
              <div className="favorite">
                <span className="icon icon_favorite"></span>
              </div>
              <div
                className="payment"
                onClick={() => {
                  setPopupVisible(true);
                  setClickedButton("payment");
                }}
              >
                <span className="text">구매하기</span>
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
        )}
      </div>
    </div>
  );
};

export default KKST;
