import React from 'react';
import technician from '../../../images/technicianSkill.png';

import { FaChevronCircleRight } from 'react-icons/fa';
const AboutTechnician = () => {
  return (
    <section className='about-technician row my-5'>
      <div className='col-md-6'>
        <img src={technician} alt='' className='img-fluid' />
      </div>
      <div className='col-md-6'>
        <h3 className='Green-Color fs-5'>Professional Repair Technicians</h3>
        <h2 className='fs-1'>Your Device In Safe Hands</h2>
        <p className='fs-6 my-3'>
          Here at TekhFixers we repair hundreds of devices a month, so rest
          assured you’re in safe hands sending your devices to us for repair.
          <br /> <br />
          TekhFixers are capable of repairing any electronic device on the
          market now and those manufactured in the last 10 years. We have all
          the right tools for the job so we can open up your device, repair it
          and assemble it all back together without ever knowing it had been
          touched.
        </p>
        <button>
          {' '}
          Learn More <FaChevronCircleRight />
        </button>
      </div>
    </section>
  );
};

export default AboutTechnician;
