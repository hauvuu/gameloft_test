import React, {useState} from 'react';
import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik } from 'formik';

const Form = () => {

  const [checkbox, setCheckbox] = useState({
    isEnoughAge: false,
    isAgree: false
  })

  const initialValues = {
    name: '',
    email: '',
    country: '',
    flatform: '',
  }

  const handleSubmit = (values, setSubmitting) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }

  const validateDatas = (values) => {
    const errors = {};
    if (!values.name) { errors.name = 'Required' };
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  }

  return (
    <div className='ContactRegisterForm-Form'>
      <h3>Stay in the Know</h3>
      <p>Don't get left behind! Subscribe to our newsletters today!</p>
      <Formik
        initialValues={ initialValues }
        validate={values => validateDatas(values)}
        onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="name"
              name="name"
              className={errors.name && touched.name ? 'ContactRegisterForm-Form-fields-error' : 'ContactRegisterForm-Form-fields-no-error'}
              placeholder='Name'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name ? <span className='ContactRegisterForm-Form-error-text'>{errors.name}</span> : ''}
            <input
              type="email"
              name="email"
              className={errors.email && touched.email ? 'ContactRegisterForm-Form-fields-error' : 'ContactRegisterForm-Form-fields-no-error'}
              placeholder='Email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email ? <span className='ContactRegisterForm-Form-error-text'>{errors.email}</span> : ''}
            <select
              name="country"
              id="country"
              className='ContactRegisterForm-Form-fields-no-error'
              value={values.country}
              onChange={handleChange}
            >
              <option value="country">Country</option>
              <option value="us">United State</option>
              <option value="cn">China</option>
              <option value="vn">Việt Nam</option>
            </select>
            <br />
            <select
              name="flatform"
              id="flatform"
              className='ContactRegisterForm-Form-fields-no-error mb-3'
              value={values.flatform}
              onChange={handleChange}
            >
              <option value="flatform">Flatform</option>
              <option value="desktop">Desktop</option>
              <option value="mobile">Mobile</option>
            </select>
            <label className='d-flex align-items-start mb-2'>
              <input
                className='ContactRegisterForm-Form-checkbox me-2'
                type="checkbox"
                name="enoughAge"
                value={checkbox.isEnoughAge}
                onClick={() => setCheckbox({...checkbox, isEnoughAge: !checkbox.isEnoughAge})}
              />
              <span for="enoughAge"> By signing up, I confirm that I am 13 years old or older. I agree to the Gameloft Terms and Conditions and I have read the Privacy Policy.</span>
            </label>
            <label className='d-flex align-items-start'>
              <input
                className='ContactRegisterForm-Form-checkbox me-2'
                type="checkbox"
                name="agree"
                value={checkbox.isAgree}
                onClick={() => setCheckbox({...checkbox, isAgree: !checkbox.isAgree})}
              />
              <span for="agree"> I agree to receive promotional offers relating to all Gameloft games and services.</span>
            </label>
            <button className='ContactRegisterForm-Form-submit' type="submit" disabled={isSubmitting || !checkbox.isEnoughAge || !checkbox.isAgree}>
              Button
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;