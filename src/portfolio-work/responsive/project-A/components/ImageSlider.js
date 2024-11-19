import React, { useState, useEffect } from 'react';

const ImageSlider = ({ totalSlides, itemsPerSlide }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // 각 슬라이드에 대한 상태

  const nextSlide = () => {
    if (currentIndex < Math.ceil(totalSlides / itemsPerSlide)) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };
  return (
    <div className='slide-container'>
      <div
        className='img-slide'
        style={{
          transform: `translateX(-${(currentIndex * 100) / itemsPerSlide}%) ${
            totalSlides >= 3 ? `translateX(-${20 * (currentIndex * 2)}px)` : ''
          }`,
        }}
      >
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className='img'
            style={{ flex: `0 0 ${100 / itemsPerSlide}%` }}
          ></div>
        ))}
      </div>
      <button
        className={`prev ${currentIndex === 0 ? 'disabled' : ''}`}
        onClick={prevSlide}
      >
        <span className='icon'></span>
      </button>
      <button
        className={`next ${
          totalSlides >= 3
            ? currentIndex === 2
              ? 'disabled'
              : ''
            : currentIndex === 1
            ? 'disabled'
            : ''
        }`}
        onClick={nextSlide}
      >
        <span className='icon'></span>
      </button>
    </div>
  );
};

export default ImageSlider;
