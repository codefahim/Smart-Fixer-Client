import React from 'react';
import './HomeBanner.css';
import { FaChevronCircleRight } from 'react-icons/fa';
import bannerImage from '../../../images/banner.png';
const HomeBanner = () => {
  return (
    <section className='row banner'>
      <div className='col-md-6 pt-5'>
        <h1 className='fs-1 w-50 py-2'>Professional Device Repairs</h1>
        <p className='w-75 py-3 fs-5'>
          Accidents happen, and it’s our job to fix them when it comes to
          damaging your mobile device. It’s never been easier to render your
          device useless after dropping it. Our trained technicians will
          diagnose and repair your device within 24 hours.
        </p>

        <button>
          {' '}
          <a href='#service' className='newLink'>
            Fix my Device <FaChevronCircleRight />
          </a>
        </button>
      </div>
      <div className='col-md-6'>
        <img src={bannerImage} alt='' className='img-fluid' />
      </div>
    </section>
  );
};

export default HomeBanner;
