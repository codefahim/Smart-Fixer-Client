import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavTwo.css';
const NavTwo = () => {
  const photo = sessionStorage.getItem('photo');
  return (
    <Navbar bg='light' expand='lg' className='nav-bg'>
      <Navbar.Brand as={Link} to='/Home' className='mx-3'>
        Smart Fixer
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' className='mx-3' />
      <Navbar.Collapse id='basic-navbar-nav' className='mx-3'>
        <Nav className='ms-auto'>
          <Nav.Link as={Link} to='/Home'>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to='/DashBoard'>
            DashBoard
          </Nav.Link>
          <Nav.Link as={Link} to='/Order'>
            Order
          </Nav.Link>
          {photo == null && (
            <Nav.Link as={Link} to='/Login'>
              Login
            </Nav.Link>
          )}

          {photo !== null && (
            <Nav.Link as={Link} to='/LogOut'>
              LogOut
            </Nav.Link>
          )}
          {photo !== null && (
            <Nav.Link>
              <img
                src={photo}
                className='w-25 responsive-width rounded-circle'
                alt=''
              />
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavTwo;
