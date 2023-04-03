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
  {index: 0, img: '', downloadSrc: ''},
  {index: 1, img: '', downloadSrc: ''},
  {index: 2, img: '', downloadSrc: ''},
  {index: 3, img: '', downloadSrc: ''},
  {index: 4, img: '', downloadSrc: ''},
  {index: 5, img: '', downloadSrc: ''},
  {index: 6, img: '', downloadSrc: ''},
  {index: 7, img: '', downloadSrc: ''},
  {index: 8, img: '', downloadSrc: ''},
  {index: 9, img: '', downloadSrc: ''},
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

  return (
    <div className='GameContent'>
      <div className='container text-start'>
        <h2>Exclusive Game Content</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.</p>
      </div>
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
          <GameContentItem key={item.index} img={item.img} downloadSrc={item.downloadSrc} />
        ))}
      </Slider>
      <img
        className='GameContent-flipX me-3'
        src='static/icons/GameContent_arrow.png'
        alt='GameContent_arrow'
        onClick={() => handlePrev()}
      />
      <span className='GameContent-paging'><b>{currentItem + 1}</b> / {contentList.length}</span>
      <img
        className='ms-3'
        src='static/icons/GameContent_arrow.png'
        alt='GameContent_arrow'
        onClick={() => handleNext()}
      />
    </div>
  );
};

export default GameContent;