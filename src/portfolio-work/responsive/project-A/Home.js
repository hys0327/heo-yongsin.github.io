import React, { useState, useEffect } from 'react';
import ProductTable from './components/ProductTable';
import CustomSelect from './components/CustomSelect';
import ImageSlider from './components/ImageSlider';

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
}) => {
  // 선택하지 않은 색상 필터링 -> mid-thumb 에 노출
  const filteredColors = colors.filter((color) => color !== selectedImage);

  const [rightWrapSelectedColor, setRightWrapSelectedColor] = useState(null);
  const [rightWrapSelectedSize, setRightWrapSelectedSize] = useState(null);

  const colorOptions = [
    { label: '블랙', value: '#000000' },
    { label: '네이비', value: '#000080' },
    { label: '아이보리', value: '#FFFFF0' },
    { label: '그린', value: '#008000' },
    { label: '베이지', value: '#F5F5DC' },
  ];

  const sizeOptions = [
    { label: 'S', value: '90' },
    { label: 'M', value: '95' },
    { label: 'L', value: '100' },
    { label: 'XL', value: '105' },
  ];

  const [num, setNum] = useState(1); // 수량을 관리하는 상태
  const baseAmount = 38900; // 기본 금액 설정
  const handleMinus = () => {
    if (num > 1) {
      setNum(num - 1); // 수량 감소
    }
  };

  const handlePlus = () => {
    setNum(num + 1); // 수량 증가
  };

  const totalAmount = baseAmount * num; // 수량에 따른 총 결제 금액 계산

  // 선택한 상품 삭제 및 색상/사이즈 초기화
  const handleDelete = () => {
    setRightWrapSelectedColor(null);
    setRightWrapSelectedSize(null);
    setNum(1); // 수량도 초기화
  };

  return (
    <>
      {viewType === 'mobile' ? (
        <div className='home-view'>
          <div className='thumb-wrap'>
            <div className='image-wrap'>
              <div className={`image ${selectedImage}`}></div>
            </div>
            <div className='color-chip'>
              {colors.map((color) => (
                <div
                  key={color}
                  className={`color ${color} ${
                    selectedImage === color ? 'selected' : ''
                  }`}
                  onClick={() => handleColorClick(color)}
                ></div>
              ))}
            </div>
          </div>
          <div className='prod-nav'>
            <span className='num current'>
              {colors.indexOf(selectedImage) + 1}
            </span>
            <span className='num gap'>/</span>
            <span className='num maximum'>{colors.length}</span>
          </div>
          <div className='brand-nav'>
            <span className='name'>MERGO</span>
            <span className='icon icon_arrow'></span>
          </div>
          <div className='category-nav'>
            <span className='type'>상의</span>
            <span className='icon icon_arrow'></span>
            <span className='type'>니트</span>
            <span className='icon icon_arrow'></span>
            <span className='type'>카라</span>
          </div>
          <div className='prod-title'>
            <span className='text'>부클 오픈 카라 반팔 니트 5colors</span>
          </div>
          <div className='prod-price'>
            <span className='origin-price'>50,750원</span>
            <div className='sale'>
              <span className='sale-ratio'>29%</span>
              <span className='sale-price'>￦38,900원</span>
            </div>
          </div>
          <div className='mid-thumb'>
            {filteredColors.map((color) => (
              <div key={color} className={`prod-image ${color}`}></div>
            ))}
          </div>
          <div className='event-wrap'>
            <div className='event exhibition'>
              <span className='text'>지금 주목해야 하는 기획전</span>
              <div className='thumb-wrap'>
                <div className='thumb-exhibition-img1'></div>
              </div>
            </div>
            <div className='event products'>
              <span className='text'>추가상품</span>
              <div className='thumb-wrap'>
                <div className='thumb-prod-img1'></div>
                <div className='thumb-prod-img2'></div>
                <div className='thumb-prod-img3'></div>
              </div>
            </div>
            <div className='event cody'>
              <span className='text'>코디</span>
              <div className='thumb-wrap'>
                <div className='thumb-cody-img1'></div>
                <div className='thumb-cody-img2'></div>
                <div className='thumb-cody-img3'></div>
              </div>
            </div>
          </div>
          <div className='info-wrap'>
            <div className='size'>
              <span className='text'>사이즈 측정</span>
              <div className='guide'>
                <div className='guide-img'></div>
                <div className='guide-wrap'>
                  <span className='text'>제품 사이즈 측정법</span>
                  <span className='text text-btn'>자세히 보기</span>
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
            <div className='review'></div>
          </div>
        </div>
      ) : (
        <div className='home-view desktop'>
          <div className='content-wrap'>
            <div className='content intro'>
              <div className='prod-img'></div>
              <div className='prod-info'>
                <div className='info-content'>
                  <div className='prod-nav'>
                    <span className='text'>상의</span>
                    <span className='icon icon_arrow'></span>
                    <span className='text'>니트</span>
                    <span className='icon icon_arrow'></span>
                    <span className='text'>카라</span>
                  </div>
                  <h2 className='prod-name'>콜튼 라운드넥 니트 5 Colors</h2>
                  <div className='review'>
                    <input type='button' id='review-btn' />
                    <label htmlFor='review-btn'>
                      <div className='icon-wrap'>
                        <span className='icon icon_review'></span>
                        <span className='icon icon_review'></span>
                        <span className='icon icon_review'></span>
                        <span className='icon icon_review'></span>
                        <span className='icon icon_review'></span>
                      </div>
                      <span className='text'>4.8</span>
                      <a href='#'>
                        <span className='text'>후기 50개</span>
                      </a>
                    </label>
                  </div>
                  <div className='prod-price'>
                    <span className='price original'>49,000원</span>
                    <div className='price-btm'>
                      <span className='text'>20%</span>
                      <span className='price benefit'>39,000원</span>
                    </div>
                  </div>
                </div>
                <div className='benefit-content'>
                  <div className='point-wrap'>
                    <span className='text'>포인트</span>
                    <span className='text'>
                      구매 시 1,197P 예상 적립 (회원 0.3%)
                    </span>
                  </div>
                  <div className='card-wrap'>
                    <span className='text'>카드 혜택</span>
                    <div className='text-wrap'>
                      <p className='text'>국민카드 1/3/5/10만원</p>
                      <p className='text'>롯데카드 청구할인</p>
                      <p className='text'>하나카드 무이자 최대 12개월</p>
                    </div>
                  </div>
                  <div className='delivery-wrap'>
                    <span className='text'>배송 정보</span>
                    <div className='text-wrap'>
                      <p className='text'>
                        <span className='text bold'>무료</span> / 로젠택배
                      </p>
                      <p className='text'>
                        <span className='text bold'>10/21 (월)</span>도착예상
                      </p>
                      <p className='text'>
                        도서 산간 지역 불가 | 제주 특별자치도 15,000원 선불
                      </p>
                    </div>
                  </div>
                </div>
                <div className='prod-thumb-wrap'>
                  <div className='thumb black'></div>
                  <div className='thumb green selected'></div>
                  <div className='thumb ivory'></div>
                </div>
              </div>
            </div>
            <div className='content event'>
              <div className='event-app'></div>
              <div className='event-exhibition'>
                <h3 className='title'>지금 주목해야 하는 기획전</h3>
                <ImageSlider totalSlides={2} itemsPerSlide={1} />
              </div>
            </div>
            <div className='content another-prod'>
              <h3 className='title'>추가 상품</h3>
              <ImageSlider totalSlides={5} itemsPerSlide={3} />
            </div>
            <div className='content cody'>
              <h3 className='title'>코디</h3>
              <div className='img-wrap'>
                <div className='img cody1'></div>
                <div className='img cody2'></div>
                <div className='img cody3'></div>
              </div>
            </div>
            <div className='content size-container'>
              <div className='info-wrap'>
                <div className='size'>
                  <span className='text'>사이즈 측정</span>
                  <div className='guide'>
                    <div className='guide-img'></div>
                    <div className='guide-wrap'>
                      <span className='text'>제품 사이즈 측정법</span>
                      <span className='text text-btn'>자세히 보기</span>
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
                <div className='review'></div>
              </div>
            </div>
          </div>
          <div className='right-wrap'>
            <div className='right-top'>
              <div className='select-wrap'>
                {/* 색상 선택 */}
                <CustomSelect
                  label='색상 선택'
                  options={colorOptions}
                  selectedOption={rightWrapSelectedColor}
                  handleSelect={setRightWrapSelectedColor}
                />
                {/* 사이즈 선택 */}
                <CustomSelect
                  label='사이즈 선택'
                  options={sizeOptions}
                  selectedOption={rightWrapSelectedSize}
                  handleSelect={setRightWrapSelectedSize}
                />
              </div>
              {rightWrapSelectedColor && rightWrapSelectedSize && (
                <div className='prod-wrap'>
                  <h3 className='title'>선택 상품</h3>
                  <div className='prod-top'>
                    <div className='prod-top-left'>
                      <span className='prod_name'>
                        부클 오픈 카라 반팔 니트 5colors
                      </span>
                      <span className='prod_color'>{`${rightWrapSelectedColor.label} / ${rightWrapSelectedSize.label}`}</span>
                    </div>
                    <div className='prod-top-right'>
                      <button onClick={handleDelete}>
                        <span className='icon icon_delete'></span>
                      </button>
                    </div>
                  </div>
                  <div className='prod-btm'>
                    <div className='prod-btm-left'>
                      <button type='button' onClick={handleMinus}>
                        <span className='icon icon_minus'></span>
                      </button>
                      <span className='num'>{num}</span>
                      <button type='button' onClick={handlePlus}>
                        <span className='icon icon_plus'></span>
                      </button>
                    </div>
                    <div className='prod-btm-right'>
                      <span className='amount'>38,900원</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {rightWrapSelectedColor && rightWrapSelectedSize && (
              <div className='payment-wrap'>
                <div className='payment-top'>
                  <h3 className='title'>총 결제 금액</h3>
                  <span className='amount'>
                    {totalAmount.toLocaleString()}원
                  </span>
                </div>
                <div className='payment-btm'>
                  <button>장바구니 담기</button>
                  <button>바로 구매하기</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
