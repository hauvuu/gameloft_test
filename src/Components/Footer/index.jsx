import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Footer-desktop-contents container d-none d-sm-block'>
        <div className='row'>
          <div className='col text-align-start'>
            <img className='Footer-desktop-contents-Logo' src="static/icons/Logo_Footer.png" alt="footer_logo" />
            <h3 className='mt-5 mb-3'>Follow Us</h3>
            <div className='d-flex justify-content-start align-items-start mb-4'>
              <img className='me-3' src='static/icons/facebook_footer.png' alt='facebook' />
              <img className='me-3' src='static/icons/linkedin_footer.png' alt='linkedin' />
              <img className='me-3' src='static/icons/twitter_logo.png' alt='twitter' />
              <img src='static/icons/youtube_logo.png' alt='youtube' />
            </div>
            <select className='Footer-desktop-contents-language' name='languages'>
              <option value='en'>English</option>
              <option value='vi'>Việt Nam</option>
            </select>
          </div>
          <div className='col d-flex justify-content-center'>
            <div className='d-block text-start'>
              <h3 className='mb-5'>VISIT</h3>
              <p>Gameloft Games</p>
              <p>Gameloft Careers</p>
              <p>Gameloft News</p>
              <p>Gameloft Forum</p>
              <p>Gameloft Corporate</p>
              <p>Gameloft Advertising</p>
              <p>Gameloft Support</p>
              <h3 className='mt-5 mb-5'>LEGAL</h3>
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
              <p>Cookies Policy</p>
              <p>EULA</p>
              <p>Legal Notices</p>
              <p>Event Rules</p>
              <p>Business Contacts</p>
            </div>
          </div>
        </div>
      </div>
      <div className='Footer-desktop-copyright d-none d-sm-block'>
        <p>©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo are trademarks of Gameloft in the U.S. and/or other countries.</p>
        <p>All other trademarks are the property of their respective owners.</p>
      </div>
      <div className='d-block d-sm-none'>
        <div className='Footer-mobile-social'>
            <h3 className='mb-2'>Follow Us</h3>
            <div className='d-flex justify-content-center'>
              <img className='me-2' src='static/icons/facebook_mobile_logo.png' alt='facebook' />
              <img className='me-2' src='static/icons/linkedin_mobile_logo.png' alt='linkedin' />
              <img className='me-2' src='static/icons/twitter_mobile_logo.png' alt='twitter' />
              <img src='static/icons/youtube_mobile_logo.png' alt='youtube' />
            </div>
        </div>
        <div className='Footer-mobile-contents pb-5 container'>
          <img className='mt-3 mb-4' width='275px' src="static/icons/Logo_Footer.png" alt="footer_logo" />
          <div className='row'>
            <div className='col text-start'>
              <p>Gameloft Games</p>
              <p>Gameloft Careers</p>
              <p>Gameloft News</p>
              <p>Gameloft Forum</p>
              <p>Gameloft Corporate</p>
              <p>Gameloft Advertising</p>
              <p>Gameloft Support</p>
            </div>
            <div className='col text-start'>
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
              <p>Cookies Policy</p>
              <p>EULA</p>
              <p>Legal Notices</p>
              <p>Event Rules</p>
              <p>Contest Rules</p>
              <p>Business Contacts</p>
            </div>
          </div>
        </div>
        <div className='Footer-mobile-copyright container pb-3'>
          <p>©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo are trademarks of Gameloft in the U.S. and/or other countries.</p>
          <p>All other trademarks are the property of their respective owners.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;