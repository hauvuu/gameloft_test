import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = () => {

  const displayRacing = (index) => {
    const MAX_NUMBER_OF_START = 5;
    if (typeof index === 'number' && index >= 0 && index <= 5) {
      return (
        <div className='border-start ps-3 d-flex'>
          {[...Array(index)].map(() => <img className='me-1' src='static/icons/star.png' alt='stat' />)}
          {[...Array(MAX_NUMBER_OF_START - index)].map(() => <img className='me-1' src='static/icons/empty_star.png' alt='stat' />)}
        </div>
      )
    }
    return (
      <div className='border-start ps-3 d-flex'>
        {[...Array(MAX_NUMBER_OF_START)].map(() => <img className='me-1' src='static/icons/empty_star.png' alt='stat' />)}
      </div>
    )
  }

  return (
    <div className='Banner-root'>
      <div className='Banner-action'>
        <img src='static/icons/share_icon.png' alt='share' />
        <br />
        <img className='m-1' src='static/icons/mail_icon.png' alt='mail' />
        <br />
        <img className='m-1' src='static/icons/support_icon.png' alt='support' />
      </div>
      <div className='Banner-product d-flex align-items-end justify-content-start container'>
        <div className='text-start'>
          <h1 className='Banner-product-title mb-3'>Gameloft game</h1>
          <div className='d-flex mb-3'>
            <span className='Banner-product-racing-title me-3'>Racing/Action</span>
            {displayRacing(4)}
          </div>
          <p className='Banner-product-description mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit...</p>
        </div>
      </div>
      <div className='Banner-store'>
        <div className='container'>
          <div className="row">
            <div className="Banner-store-title col-12 col-lg-6 d-flex align-items-center text-start">
              <h3>Download lastest version</h3>
            </div>
            <div className="col-12 col-lg-6">
              <div className='Banner-store-btns-desktop d-flex align-items-center justify-content-end Banner-store-fixed-height'>
                <img className='me-3' src='static/images/nintendo_eshop_logo.png' alt='nintendo_eshop_logo' />
                <img className='me-3' src='static/images/microsoft_logo.png' alt='microsoft_logo' />
                <img className='me-3' src='static/images/steam_logo.png' alt='steam_logo' />
              </div>
              <div className="Banner-store-btns-mobile">
                <div className='row'>
                  <div className='col-6 p-2 d-flex align-items-center'>
                    <img width='100%' src='static/images/microsoft_logo.png' alt='microsoft_logo' />
                  </div>
                  <div className='col-6 p-2 d-flex align-items-center'>
                    <img width='100%' src='static/images/steam_logo.png' alt='steam_logo' />
                  </div>
                  <div className='col-6 p-2 d-flex align-items-center'>
                    <img width='100%' src='static/images/nintendo_eshop_logo.png' alt='nintendo_eshop_logo' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;