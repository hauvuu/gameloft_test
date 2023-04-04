import React, { useRef, useState } from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import EventPromotionCard from './EventPromotionCard';

const settings = {
  className: "EventPromotion-Slider",
  centerMode: true,
  infinite: true,
  slidesToShow: 5,
  speed: 500,
  dots: false,
  arrow: false,
};

const eventPromotionList = [
  {index: 0, img: '', title: 'Short title will show here', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'},
  {index: 1, img: '', title: 'Short title will show here', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'},
  {index: 2, img: '', title: 'Short title will show here', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'},
  {index: 3, img: '', title: 'Short title will show here', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'},
  {index: 4, img: '', title: 'Short title will show here', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'},
  {index: 5, img: '', title: 'Short title will show here', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'},
  {index: 6, img: '', title: 'Short title will show here', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'},
  {index: 7, img: '', title: 'Short title will show here', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'},
  {index: 8, img: '', title: 'Short title will show here', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'},
  {index: 9, img: '', title: 'Short title will show here', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'},
];

const EventPromotion = () => {

  const slickRef = useRef(null);
  const [currentItem, setCurrentItem] = useState(0);

  const handleClickSlickGoTo = (index) => {
    if (slickRef.current) slickRef.current.slickGoTo(index);
  };

  const showCardList = () => (
    <Slider {...settings}
      ref={slickRef}
      afterChange={index => setCurrentItem(index)}
      autoplay
      autoplaySpeed={3000}
      responsive={[
        {
          breakpoint: 1750,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]}
    >
      {eventPromotionList.map(item => (
        <EventPromotionCard
          key={item.index}
          img={item.img}
          title={item.title}
          description={item.description}
        />
      ))}
    </Slider>
  )

  const showCardNumberList = () => {
    return (
      <div className='container d-none d-sm-flex justify-content-center align-items-center'>
        {eventPromotionList.map(item => {
          if (currentItem === item.index) {
            return (
              <div class="EventPromotion-CardNumberItem-progress">
                <span class="EventPromotion-CardNumberItem-progress-left">
                  <span class="EventPromotion-CardNumberItem-progress-bar"></span>
                </span>
                <span class="EventPromotion-CardNumberItem-progress-right">
                  <span class="EventPromotion-CardNumberItem-progress-bar"></span>
                </span>
                <div class="EventPromotion-CardNumberItem-progress-value d-flex justify-content-center align-items-center me-1">
                  {item.index + 1}
                </div>
              </div>
            )
          } else {
            return (
              <div
                className='EventPromotion-CardNumberItem-noSelected d-flex justify-content-center align-items-center me-1 cursor-pointer'
                onClick={() => handleClickSlickGoTo(item.index)}
              >
                {item.index + 1}
              </div>
            )
          }
        })}
      </div>
    )
  }

  return (
    <div className='EventPromotion pb-5'>
      <div className='container text-start'>
        <h2>Special Events & Promotional</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.</p>
      </div>
      {showCardList()}
      {showCardNumberList()}
    </div>
  );
};

export default EventPromotion;