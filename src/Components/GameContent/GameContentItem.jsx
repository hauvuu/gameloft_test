import React from 'react';
import './GameContentItem.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const GameContentItem = props => {
  const { key, img, downloadSrc } = props;

  return (
    <div
      className='GameContentItem d-flex justify-content-end align-items-start'
      style={{ backgroundImage: `url(${img ? img : 'static/images/GameContentItem_background.png'})` }}
      key={key}
    >
      <img
        src='static/icons/GameContentItem_download_btn.png'
        alt='download button'
        onClick={() => console.log(downloadSrc)}
      />
    </div>
  );
};

GameContentItem.defautProps = {
  key: 0,
  img: '',
  downloadSrc: ''
};

export default GameContentItem;