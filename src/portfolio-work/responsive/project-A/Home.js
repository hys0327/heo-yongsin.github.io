import React from "react";
import ProductTable from "./components/ProductTable";

const Home = ({
  selectedImage,
  handleColorClick,
  colors,
  selectedProduct,
  selectedSize,
  handleSizeSelect,
  setPopupVisible,
  productData,
  setClickedButton,
}) => {
  // 선택하지 않은 색상 필터링 -> mid-thumb 에 노출
  const filteredColors = colors.filter((color) => color !== selectedImage);
  return (
    <div className="home-view">
      <div className="thumb-wrap">
        <div className="image-wrap">
          <div className={`image ${selectedImage}`}></div>
        </div>
        <div className="color-chip">
          {colors.map((color) => (
            <div
              key={color}
              className={`color ${color} ${
                selectedImage === color ? "selected" : ""
              }`}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      </div>
      <div className="prod-nav">
        <span className="num current">{colors.indexOf(selectedImage) + 1}</span>
        <span className="num gap">/</span>
        <span className="num maximum">{colors.length}</span>
      </div>
      <div className="brand-nav">
        <span className="name">MERGO</span>
        <span className="icon icon_arrow"></span>
      </div>
      <div className="category-nav">
        <span className="type">상의</span>
        <span className="icon icon_arrow"></span>
        <span className="type">니트</span>
        <span className="icon icon_arrow"></span>
        <span className="type">카라</span>
      </div>
      <div className="prod-title">
        <span className="text">부클 오픈 카라 반팔 니트 5colors</span>
      </div>
      <div className="prod-price">
        <span className="origin-price">55,000원</span>
        <div className="sale">
          <span className="sale-ratio">29%</span>
          <span className="sale-price">￦38,900원</span>
        </div>
      </div>
      <div className="mid-thumb">
        {filteredColors.map((color) => (
          <div key={color} className={`prod-image ${color}`}></div>
        ))}
      </div>
      <div className="event-wrap">
        <div className="event exhibition">
          <span className="text">지금 주목해야 하는 기획전</span>
          <div className="thumb-wrap">
            <div className="thumb-exhibition-img1"></div>
          </div>
        </div>
        <div className="event products">
          <span className="text">추가상품</span>
          <div className="thumb-wrap">
            <div className="thumb-prod-img1"></div>
            <div className="thumb-prod-img2"></div>
            <div className="thumb-prod-img3"></div>
          </div>
        </div>
        <div className="event cody">
          <span className="text">코디</span>
          <div className="thumb-wrap">
            <div className="thumb-cody-img1"></div>
            <div className="thumb-cody-img2"></div>
          </div>
        </div>
      </div>
      <div className="info-wrap">
        <div className="size">
          <span className="text">사이즈 측정</span>
          <div className="guide">
            <div className="guide-img"></div>
            <div className="guide-wrap">
              <span className="text">제품 사이즈 측정법</span>
              <span className="text text-btn">자세히 보기</span>
            </div>
          </div>
          <ProductTable
            selectedProduct={selectedProduct}
            selectedSize={selectedSize}
            handleSizeSelect={handleSizeSelect}
            setPopupVisible={setPopupVisible}
            productData={productData}
            setClickedButton={setClickedButton}
          />
        </div>
        <div className="review"></div>
      </div>
      <div className="test"></div>
    </div>
  );
};

export default Home;
