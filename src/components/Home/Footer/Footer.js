import React from 'react';
import './Footer.css';
import logo from '../../../logo.png';
const Footer = () => {
  return (
    <footer
      className='Primary-bg-Color  text-light row'
      style={{ minHeight: '250px' }}
    >
      <div className='row'>
        <div className='col-md-3 col-sm-6'>
          <div className='my-2'>
            <img src={logo} className='w-25 img-fluid' />
            <span className='fw-bold mx-3'>Smart Fixer</span>
          </div>
          <p className='text-justify' style={{ color: '#b3bec8' }}>
            Vivamus consectetur est elit, et scelerisque urna efficitur vitae.
            Cras maximus ultricies volutpat. Praesent ut enim non enim vulputate
            fringilla.
          </p>
        </div>
        <div className='col-md-3 col-sm-6 mt-3'>
          <h5>Pages</h5>
          <div className='anchor'>
            <a href='/'>Home</a>
            <a href='/'>Services</a>
            <a href='/'>Shop</a>
            <a href='/'>FAQ</a>
            <a href='/'>Fix my Phone</a>
            <a href='/'>Contact</a>
          </div>
        </div>
        <div className='col-md-3 col-sm-6 mt-3'>
          <h5>Services</h5>
          <div className='anchor'>
            <a href='/'>Mobile Repair</a>
            <a href='/'>Tablet Repair</a>
            <a href='/'>Laptop Repair</a>
            <a href='/'>Pc & Mac Repair</a>
            <a href='/'>Smartwatch Repair</a>
            <a href='/'>Servicing & Maintenance</a>
          </div>
        </div>
        <div className='col-md-3 col-sm-6 mt-3'>
          <h5>Contact</h5>
          <address>
            Phone: +1 888 123 4567 <br /> Email: hello@tekhfixers.com <br />
            Find Us: TekhFixers, 513 Kings Rd, London,‌‌‌‌‌‌‌‌ SW10 0TX
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
