import React, { useState, useEffect } from "react";
import ProductTable from "./components/ProductTable";
import CustomSelect from "./components/CustomSelect";

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
  viewType,
  setView,
}) => {
  // 선택하지 않은 색상 필터링 -> mid-thumb 에 노출
  const filteredColors = colors.filter((color) => color !== selectedImage);

  const [rightWrapSelectedColor, setRightWrapSelectedColor] = useState(null);
  const [rightWrapSelectedSize, setRightWrapSelectedSize] = useState(null);

  const colorOptions = [
    { label: "블랙", value: "#000000" },
    { label: "네이비", value: "#000080" },
    { label: "아이보리", value: "#FFFFF0" },
    { label: "그린", value: "#008000" },
    { label: "베이지", value: "#F5F5DC" },
  ];

  const sizeOptions = [
    { label: "S", value: "90" },
    { label: "M", value: "95" },
    { label: "L", value: "100" },
    { label: "XL", value: "105" },
  ];

  useEffect(() => {
    console.log("rightWrapSelectedColor", rightWrapSelectedColor);
    console.log("rightWrapSelectedSize", rightWrapSelectedSize);
  }, [rightWrapSelectedColor, rightWrapSelectedSize]);

  return (
    <>
      {viewType === "mobile" ? (
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
            <span className="num current">
              {colors.indexOf(selectedImage) + 1}
            </span>
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
            <span className="origin-price">50,750원</span>
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
        </div>
      ) : (
        <div className="home-view desktop">
          <div className="content-wrap">
            <div className="content">
              <div className="prod-img"></div>
              <div className="prod-info"></div>
            </div>
          </div>
          <div className="right-wrap">
            <div className="select-wrap">
              {/* 색상 선택 */}
              <CustomSelect
                label="색상 선택"
                options={colorOptions}
                selectedOption={rightWrapSelectedColor}
                handleSelect={setRightWrapSelectedColor}
              />
              {/* 사이즈 선택 */}
              <CustomSelect
                label="사이즈 선택"
                options={sizeOptions}
                selectedOption={rightWrapSelectedSize}
                handleSelect={setRightWrapSelectedSize}
              />
            </div>
            {rightWrapSelectedColor && rightWrapSelectedSize && (
              <div className="prod-wrap">
                <h3 className="title">선택 상품</h3>
                <div className="prod-top">
                  <div className="prod-top-left">
                    <span className="prod_name">
                      부클 오픈 카라 반팔 니트 5colors
                    </span>
                    <span className="prod_color">{`${rightWrapSelectedColor.label} / ${rightWrapSelectedSize.label}`}</span>
                  </div>
                  <div className="prod-top-right">
                    <span className="icon icon_delete"></span>
                  </div>
                </div>
                <div className="prod-btm">
                  <div className="prod-btm-left">
                    <button type="button">
                      <span className="icon icon_minus"></span>
                    </button>
                    <span className="num">1</span>
                    <button type="button">
                      <span className="icon icon_plus"></span>
                    </button>
                  </div>
                  <div className="prod-btm-right">
                    <div className="amount">38,900원</div>
                  </div>
                </div>
              </div>
            )}
            <div className="payment-wrap">
              <p>asd</p>
              <p>asd</p>
              <p>asd</p>
              <p>asd</p>
              <p>asd</p>
              <p>asd</p>
              <p>asd</p>
              <p>asd</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
