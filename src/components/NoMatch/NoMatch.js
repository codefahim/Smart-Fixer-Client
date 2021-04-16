import React from 'react';
import Footer from '../Home/Footer/Footer';
import Nav from '../Home/Nav/Nav';
import Subscribe from '../Home/Subscribe/Subscribe';

const NoMatch = () => {
  return (
    <div className='container w-100'>
      <Nav />
      <div style={{ height: '400px' }}>
        <h2 className='my-4 text-center my-5 py-5' style={{ color: '#eaeaea' }}>
          404! This Page is not Found.
        </h2>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default NoMatch;
