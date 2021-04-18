import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
const Nav = () => {
  const photo = sessionStorage.getItem('photo');
  console.log(photo);
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light nav-bg '>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/Home'>
            Smart Fixer
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link' to='/Home'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/DashBoard'>
                  DashBoard
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/Order'>
                  Order
                </Link>
              </li>
              
              {photo == null && (
                <li className='nav-item'>
                  <Link className='nav-link' to='/Login'>
                    Login
                  </Link>
                </li>
              )}
              {photo !== null && (
                <li className='nav-item'>
                  <Link className='nav-link' to='/LogOut'>
                    LogOut
                  </Link>
                </li>
              )}

              {photo !== null && (
                <li className='nav-item'>
                  <img src={photo} className='w-50 rounded-circle' alt='' />
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
