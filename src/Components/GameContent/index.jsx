import React, { useRef, useState } from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import GameContentItem from './GameContentItem';

const settings = {
  className: "GameContent-Slider",
  centerMode: true,
  infinite: true,
  slidesToShow: 3,
  speed: 500,
  dots: false,
  arrow: false,
};

const contentList = [
  {index: 0, img: 'static/images/sample_img_1.jpg'},
  {index: 1, img: 'static/images/sample_img_2.jpeg'},
  {index: 2, img: 'static/images/sample_img_1.jpg'},
  {index: 3, img: 'static/images/sample_img_2.jpeg'},
  {index: 4, img: 'static/images/sample_img_1.jpg'},
  {index: 5, img: 'static/images/sample_img_2.jpeg'},
  {index: 6, img: 'static/images/sample_img_1.jpg'},
  {index: 7, img: 'static/images/sample_img_2.jpeg'},
  {index: 8, img: 'static/images/sample_img_1.jpg'},
  {index: 9, img: 'static/images/sample_img_2.jpeg'},
];

const GameContent = () => {

  const slickRef = useRef(null);
  const [currentItem, setCurrentItem] = useState(0);

  const handleNext = () => {
    if (slickRef.current) slickRef.current.slickNext();
  };

  const handlePrev = () => {
    if (slickRef.current) slickRef.current.slickPrev();
  };

  const showGameContentList = () => (
    <Slider {...settings}
      ref={slickRef}
      afterChange={index => setCurrentItem(index)}
      responsive={[
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]}
    >
      {contentList.map(item => (
        <GameContentItem key={item.index} img={item.img}/>
      ))}
    </Slider>
  )

  return (
    <div className='GameContent'>
      <div className='container text-start'>
        <h2>Exclusive Game Content</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.</p>
      </div>
      {showGameContentList()}
      <img
        className='flipX me-3 cursor-pointer'
        src='static/icons/GameContent_arrow.png'
        alt='GameContent_arrow'
        onClick={() => handlePrev()}
      />
      <span className='GameContent-paging'><b>{currentItem + 1}</b> / {contentList.length}</span>
      <img
        className='ms-3 cursor-pointer'
        src='static/icons/GameContent_arrow.png'
        alt='GameContent_arrow'
        onClick={() => handleNext()}
      />
    </div>
  );
};

export default GameContent;