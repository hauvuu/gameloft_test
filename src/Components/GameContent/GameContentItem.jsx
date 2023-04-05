import React, {useRef} from 'react';
import './GameContentItem.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import html2canvas from "html2canvas";

const GameContentItem = props => {
  const { key, img } = props;

  const ref = useRef(null);

  const handleClickTakeScreenShot = () => {
    const { cropPositionTop, cropPositionLeft, cropWidth, cropHeigth } = {
      cropPositionTop: 0,
      cropPositionLeft: 0,
      cropWidth: 1400,
      cropHeigth: 1800
    };

    html2canvas(ref.current).then(canvas => {
      let croppedCanvas = document.createElement("canvas");
      let croppedCanvasContext = croppedCanvas.getContext("2d");

      croppedCanvas.width = cropWidth;
      croppedCanvas.height = cropHeigth;

      croppedCanvasContext.drawImage(canvas, cropPositionLeft, cropPositionTop);

      const a = document.createElement("a");
      a.href = croppedCanvas.toDataURL();
      a.download = "game_img.png";
      a.click();
    });
  };

  return (
    <div
      id="#screenshot"
      className='GameContentItem d-flex justify-content-end align-items-start'
      style={{ backgroundImage: `url(${img ? img : 'static/images/GameContentItem_background.png'})` }}
      key={key}
      ref={ref}
    >
      <img
        src='static/icons/GameContentItem_download_btn.png'
        alt='download button'
        onClick={() => handleClickTakeScreenShot()}
      />
    </div>
  );
};

GameContentItem.defaultProps = {
  key: 0,
  img: ''
};

export default GameContentItem;