import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const StickyMenu = () => {
  return (
    <div className='root collapse fixed-top d-flex align-items-center justify-content-between'>
      <img src='/static/icons/logo.png' alt="logo" />
      <img src='/static/icons/hamberger_meu_icon.png' alt="logo" />
    </div>
  );
};

export default StickyMenu;