import React from 'react';

const StickySocial = () => {
  return (
    <div className='StickySocial fixed-bottom d-flex justify-content-end align-items-end'>
      <div className='d-block m-4'>
        <img className='cursor-pointer' src='static/icons/share_icon.png' alt='share' />
        <br />
        <img className='m-1 cursor-pointer' src='static/icons/mail_icon.png' alt='mail' />
        <br />
        <img className='m-1 cursor-pointer' src='static/icons/support_icon.png' alt='support' />
      </div>
    </div>
  );
};

export default StickySocial;