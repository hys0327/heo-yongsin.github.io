// SizePopup.js
import React from "react";

const SizePopup = ({
  setPopupVisible,
  purchasedProducts,
  productData,
  handleProductSelectFromPopup,
  selectedProduct,
}) => {
  console.log("selectedProduct: {} ", selectedProduct);
  return (
    <>
      <div className="popup size">
        <div className="p_header">
          <h1>구매 내역</h1>
          <span
            className="icon icon_close"
            onClick={() => setPopupVisible(false)}
          ></span>
        </div>
        <div className="item_wrap">
          {purchasedProducts.map((product, index) => (
            <div
              key={index}
              className={`item ${
                selectedProduct === product.name ? "selected" : "notSelected"
              }`}
            >
              <div className={`prod_img${index + 1}`}></div>
              <div className="r_content">
                <div className="prod_info">
                  <p className="brand_name">{product.name}</p>
                  <p className="prod_name">{productData[product.name].name}</p>
                  <p className="prod_size">
                    사이즈: {productData[product.name].purchasedSize}
                  </p>
                </div>
                <button
                  className={
                    selectedProduct === product.name
                      ? "selected"
                      : "notSelected"
                  }
                  onClick={() => handleProductSelectFromPopup(product)}
                  disabled={selectedProduct === product.name}
                >
                  {selectedProduct === product.name ? "선택" : "미 선택"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SizePopup;
