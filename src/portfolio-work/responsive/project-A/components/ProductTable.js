import React, { useState, useEffect } from 'react';

const ProductTable = ({
  selectedProduct,
  selectedSize,
  handleSizeSelect,
  setPopupVisible,
  productData,
  setClickedButton,
}) => {
  // 선택한 상품에 따른 사이즈 데이터 가져오기
  const selectedProductData = productData[selectedProduct];

  // 선택한 상품이 productData에 있는지 확인 후, 사이즈 옵션 추출
  const availableSizes = selectedProductData
    ? Object.keys(selectedProductData.sizes)
    : [];
  return (
    <>
      <div className='table-wrap'>
        {/* 헤더 영역 */}
        <div className='header-row'>
          <div className='boolean bg'>cm</div>
          <div className='col-title'>
            <div className='cell'>
              <span className='num'>1</span>총장
            </div>
            <div className='cell'>
              <span className='num'>2</span>어깨너비
            </div>
            <div className='cell'>
              <span className='num'>3</span>가슴단면
            </div>
            <div className='cell'>
              <span className='num'>4</span>소매길이
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='cell bg'>제품 명</div>
          <div className='cell product-info'>
            <span className='selected-prod'>
              {productData[selectedProduct]?.name || '선택된 상품이 없습니다.'}
            </span>
            <select
              onChange={(e) => handleSizeSelect(e.target.value)}
              value={selectedSize || ''}
              disabled={!selectedProduct}
            >
              <option value=''>사이즈 선택</option>
              {availableSizes.map((size) => (
                <option key={size} value={size}>
                  {size} {/* 사이즈를 표시 */}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 선택한 사이즈에 따른 제품 치수 */}
        <div className='row'>
          <div className='cell bg'>제품 치수</div>
          <div className='cell'>
            {selectedProductData?.sizes[selectedSize]?.totalLength || '-'}
          </div>
          <div className='cell'>
            {selectedProductData?.sizes[selectedSize]?.shoulderWidth || '-'}
          </div>
          <div className='cell'>
            {selectedProductData?.sizes[selectedSize]?.chestWidth || '-'}
          </div>
          <div className='cell'>
            {selectedProductData?.sizes[selectedSize]?.sleeveLength || '-'}
          </div>
        </div>
        <div className='row'>
          <div className='cell bg'>M</div>
          <div className='cell'>67</div>
          <div className='cell'>48</div>
          <div className='cell'>56</div>
          <div className='cell'>23</div>
        </div>
        <div className='row'>
          <div className='cell bg'>L</div>
          <div className='cell'>69</div>
          <div className='cell'>50</div>
          <div className='cell'>58</div>
          <div className='cell'>24</div>
        </div>
        <div className='row'>
          <div className='cell bg'>XL</div>
          <div className='cell'>71</div>
          <div className='cell'>52</div>
          <div className='cell'>60</div>
          <div className='cell'>25</div>
        </div>
      </div>
      <div className='product-buttons'>
        <button
          onClick={() => {
            setPopupVisible(true);
            setClickedButton('size');
          }}
        >
          구매내역 선택하기
        </button>
        <button>실측 직접 입력하기</button>
      </div>
    </>
  );
};

export default ProductTable;
