import React from 'react';
import './EventPromotionCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const EventPromotionCard = props => {

  const { key, img, title, description } = props;

  return (
    <div
      className='EventPromotionCard'
      key={key}
    >
      <div className='EventPromotionCard-image d-flex justify-content-center align-items-center'>
        <img src={ img || 'static/images/EventPromotion_CardImage.png'} alt='EventPromotion_CardImage' />
      </div>
      <div className='EventPromotionCard-content'>
        <p className='EventPromotionCard-content-title'>{title}</p>
        <hr />
        <p className='EventPromotionCard-content-description'>{description}</p>
        <div className='EventPromotionCard-content-learnmore d-none justify-content-center align-items-center'>
          Read more
        </div>
        <img className='EventPromotionCard-content-share' src='static/icons/share_icons.png' alt='share' />
      </div>
    </div>
  );
};

EventPromotionCard.defautProps = {
  key: 0,
  img: '',
  title: 'Short title here',
  description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...'
};

export default EventPromotionCard;