import React, { useRef } from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings = {
  className: "SampleSlick-Slider",
  focusOnSelect: true,
  centerMode: true,
  infinite: true,
  centerPadding: "50px",
  slidesToShow: 3,
  speed: 500,
  dots: true,
};

const slides = ["1", "2", "3", "4", "5", "6"];

const SampleSlick = () => {

  const slickRef = useRef(null);

  const goToEnd = () => {
    if (slickRef.current) slickRef.current.slickNext();
  };

  const goToStart = () => {
    if (slickRef.current) slickRef.current.slickPrev();
  };

  return (
    <div className='SampleSlick'>
      <h2>Center Mode</h2>
        <Slider {...settings}
          ref={slickRef}
          beforeChange={(o,n) => console.log(o,n)}
          afterChange={index => console.log(index)}
        >
          {slides.map((slide) => (
            <div key={slide}>
              <h3>{slide}</h3>
            </div>
          ))}
        </Slider>
        <div className='mb-5'></div>
      <button onClick={() => goToStart()}>Go to start</button>
      <button onClick={() => goToEnd()}>Go to end</button>
    </div>
  );
};

export default SampleSlick;