import React, { useState, useEffect, useRef } from "react";
import Home from "./Home";
import Cart from "./Cart";
import ReactDOM from "react-dom"; // 팝업을 위한 portal

const KKST = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [selectedImage, setSelectedImage] = useState("green");
  const [view, setView] = useState("home"); // 화면 전환 상태 관리
  const [isPopupVisible, setPopupVisible] = useState(false); // 팝업 창 상태
  const [selectedProduct, setSelectedProduct] = useState(""); // 선택한 상품
  const [selectedSize, setSelectedSize] = useState(""); // 선택한 사이즈
  const containerRef = useRef(null); // project-container 참조 생성

  const colors = ["green", "ivory", "black"];
  const productData = {
    제품1: {
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
    제품2: {
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
  };

  const purchasedProducts = [
    { name: "제품1", sizes: [90, 95, 100] },
    { name: "제품2", sizes: [90, 95, 100] },
    { name: "제품3", sizes: [85, 90, 95, 100] },
  ];

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
            setPopupVisible={setPopupVisible} // 팝업 상태 관리 전달
            isPopupVisible={isPopupVisible} // 팝업 상태 전달
            selectedProduct={selectedProduct} // 선택된 상품 전달
            selectedSize={selectedSize} // 선택된 사이즈 전달
            handleSizeSelect={handleSizeSelect} // 사이즈 선택 핸들러 전달
            handleProductSelectFromPopup={handleProductSelectFromPopup} // 팝업 선택 핸들러 전달
            productData={productData} // 제품 데이터 전달
            purchasedProducts={purchasedProducts} // 구매한 제품 리스트 전달
          />
        );
      case "cart":
        return <Cart />;
      default:
        return <Home />;
    }
  };

  // 팝업
  const renderPopup = () => (
    <>
      <div className="dimmed" onClick={() => setPopupVisible(false)}></div>
      <div className="popup">
        <div className="popup-content">
          <h3>구매내역에서 상품 선택</h3>
          <ul>
            <li>
              <button
                onClick={() => handleProductSelectFromPopup({ name: "제품1" })}
              >
                제품1
              </button>
            </li>
            <li>
              <button
                onClick={() => handleProductSelectFromPopup({ name: "제품2" })}
              >
                제품2
              </button>
            </li>
            <li>
              <button
                onClick={() => handleProductSelectFromPopup({ name: "제품3" })}
              >
                제품3
              </button>
            </li>
          </ul>
          <button onClick={() => setPopupVisible(false)}>닫기</button>
        </div>
      </div>
    </>
  );

  return (
    <div className="project-container kkst" ref={containerRef}>
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
              <span className="icon cart" onClick={handleCartClick}></span>{" "}
              {/* 장바구니 클릭 */}
              <span className="icon search"></span>
            </div>
          </div>
        </nav>
      </header>

      <main>{renderPage()}</main>

      <footer>
        <div className="app_footer">
          <div className="favorite">
            <span className="icon icon_favorite"></span>
          </div>
          <div className="payment">
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
      {/* Portal을 통해 Popup을 project-container 하위로 렌더링 */}
      {isPopupVisible &&
        containerRef.current &&
        ReactDOM.createPortal(renderPopup(), containerRef.current)}
    </div>
  );
};

export default KKST;
