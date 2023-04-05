import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Footer-desktop-contents container d-none d-sm-block'>
        <div className='row'>
          <div className='col text-align-start'>
            <img className='Footer-desktop-contents-Logo cursor-pointer' src="static/icons/Logo_Footer.png" alt="footer_logo" />
            <h3 className='mt-5 mb-3'>Follow Us</h3>
            <div className='d-flex justify-content-start align-items-start mb-4'>
              <img className='me-3 cursor-pointer' src='static/icons/facebook_footer.png' alt='facebook' onClick={() => window.open('https://facebook.com', '_blank')} />
              <img className='me-3 cursor-pointer' src='static/icons/linkedin_footer.png' alt='linkedin' onClick={() => window.open('https://linkedin.com', '_blank')} />
              <img className='me-3 cursor-pointer' src='static/icons/twitter_logo.png' alt='twitter' onClick={() => window.open('https://twitter.com', '_blank')} />
              <img className='cursor-pointer' src='static/icons/youtube_logo.png' alt='youtube' onClick={() => window.open('https://youtube.com', '_blank')} />
            </div>
            <select className='Footer-desktop-contents-language' name='languages'>
              <option value='en'>English</option>
              <option value='vi'>Việt Nam</option>
            </select>
          </div>
          <div className='col d-flex justify-content-center'>
            <div className='d-block text-start'>
              <h3 className='mb-5'>VISIT</h3>
              <p className='cursor-pointer'>Gameloft Games</p>
              <p className='cursor-pointer'>Gameloft Careers</p>
              <p className='cursor-pointer'>Gameloft News</p>
              <p className='cursor-pointer'>Gameloft Forum</p>
              <p className='cursor-pointer'>Gameloft Corporate</p>
              <p className='cursor-pointer'>Gameloft Advertising</p>
              <p className='cursor-pointer'>Gameloft Support</p>
              <h3 className='mt-5 mb-5'>LEGAL</h3>
              <p className='cursor-pointer'>Terms of Use</p>
              <p className='cursor-pointer'>Privacy Policy</p>
              <p className='cursor-pointer'>Cookies Policy</p>
              <p className='cursor-pointer'>EULA</p>
              <p className='cursor-pointer'>Legal Notices</p>
              <p className='cursor-pointer'>Event Rules</p>
              <p className='cursor-pointer'>Business Contacts</p>
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
              <img className='me-2 cursor-pointer' src='static/icons/facebook_mobile_logo.png' alt='facebook' />
              <img className='me-2 cursor-pointer' src='static/icons/linkedin_mobile_logo.png' alt='linkedin' />
              <img className='me-2 cursor-pointer' src='static/icons/twitter_mobile_logo.png' alt='twitter' />
              <img src='static/icons/youtube_mobile_logo.png' alt='youtube' />
            </div>
        </div>
        <div className='Footer-mobile-contents pb-5 container'>
          <img className='mt-3 mb-4 cursor-pointer' width='275px' src="static/icons/Logo_Footer.png" alt="footer_logo" />
          <div className='row'>
            <div className='col text-start'>
              <p className='cursor-pointer'>Gameloft Games</p>
              <p className='cursor-pointer'>Gameloft Careers</p>
              <p className='cursor-pointer'>Gameloft News</p>
              <p className='cursor-pointer'>Gameloft Forum</p>
              <p className='cursor-pointer'>Gameloft Corporate</p>
              <p className='cursor-pointer'>Gameloft Advertising</p>
              <p className='cursor-pointer'>Gameloft Support</p>
            </div>
            <div className='col text-start'>
              <p className='cursor-pointer'>Terms of Use</p>
              <p className='cursor-pointer'>Privacy Policy</p>
              <p className='cursor-pointer'>Cookies Policy</p>
              <p className='cursor-pointer'>EULA</p>
              <p className='cursor-pointer'>Legal Notices</p>
              <p className='cursor-pointer'>Event Rules</p>
              <p className='cursor-pointer'>Contest Rules</p>
              <p className='cursor-pointer'>Business Contacts</p>
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