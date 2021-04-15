import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
const Nav = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light nav-bg'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/Home'>
            Smart Fixer
          </Link>
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
              <li className='nav-item'>
                <Link className='nav-link' to='/Login'>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
