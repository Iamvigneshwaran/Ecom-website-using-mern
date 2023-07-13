import React, { useState, useEffect } from 'react';

const Carousel = ({ slides, interval = 2000 }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [slides, interval]);

  const goToNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const goToPrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  return (
    <div className="carousel relative overflow-hidden">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-item w-full">
            <img
              src={slide.image}
              alt={slide.caption}
              className="w-full h-auto object-cover"
            />
            <div className="carousel-caption">{slide.caption}</div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control prev"
        onClick={goToPrevSlide}
      >
        &lt;
      </button>
      <button
        className="carousel-control next"
        onClick={goToNextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
