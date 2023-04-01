import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Form';

const ContactRegisterForm = () => {
  return (
    <div className='ContactRegisterForm'>
      <div className='container'>
        <div className='row overflow-hidden'>
          <div className='ContactRegisterForm-image-container col d-none d-sm-block'>
            <img src='static/images/MinionGrey.png' alt='MimionGrey' />
          </div>
          <div className='col d-flex justify-content-center'>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactRegisterForm;