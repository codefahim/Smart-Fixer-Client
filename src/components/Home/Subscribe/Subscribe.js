import React from 'react';
import './Subscribe.css';
const Subscribe = () => {
  return (
    <section
      className='Subscribe Primary-bg-Color text-center row'
      style={{ height: '250px' }}
    >
      <div className='col-md-6 mt-5'>
        <h2 className='text-light fs-2'>Free Monthly Newsletter</h2>
        <p className='text-light fs-6'>
          Subscribe to our newsletter for all the latest news and cool tips and
          tricks to keep your mobile devices safe & secure. We promise we never
          spam, and you can unsubscribe easily.
        </p>
      </div>
      <div className='col-md-6 mt-5'>
        <input
          className='subscription'
          type='email'
          placeholder='Email Address'
        />
        <input className='subscription' type='submit' value='Subscribe' />
      </div>
    </section>
  );
};

export default Subscribe;
