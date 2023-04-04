import React from 'react';
import './Post.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Post = props => {

  const { key, img, content } = props;

  return (
    <div className='Post' key={key}>
      <div className='Post-img d-flex justify-content-center align-items-center'>
        <img src={img || 'static/images/EventPromotion_CardImage.png'} alt='post' />
      </div>
      <div className='Post-content d-flex justify-content-start align-items-end'>
        {content}
      </div>
      <img className='Post-facebook-logo' src='static/icons/facebook_post_icon.png' alt="facebook" />
      <img className='Post-share-logo' src='static/icons/share_icons.png' alt="share" />
    </div>
  );
};

Post.defaultProps = {
  key: 0,
  img: 'static/images/EventPromotion_CardImage.png',
  content: ''
}

export default Post;