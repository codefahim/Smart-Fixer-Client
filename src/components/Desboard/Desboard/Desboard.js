import React from 'react';
import { Link, Route, Router, Switch } from 'react-router-dom';
import { BsFillGridFill, BsCardList } from 'react-icons/bs';
import { FaPlus, FaUserPlus, FaCommentDots, FaHome } from 'react-icons/fa';
import {
  IoAppsOutline,
  IoCartOutline,
  IoEnterOutline,
  IoList,
} from 'react-icons/io5';
import logo from '../../../logo.png';
import './Desboard.css';

const DesBoard = () => {
  return (
    <div>
      <p>
        {' '}
        <img src={logo} alt=' ' className='img-fluid w-25' /> Dashboard
      </p>
      <ul className='navbar-nav '>
        <li className='nav-item ms-5'>
          <Link className='nav-link text-light linkStyle' to='/Home'>
            <FaHome /> Goto Home
          </Link>
        </li>
        <li className='nav-item ms-5'>
          <Link className='nav-link text-light linkStyle' to='/OrderList'>
            <BsCardList /> Order List
          </Link>
        </li>
        <li className='nav-item  ms-5'>
          <Link className='nav-link text-light linkStyle' to='/AddService'>
            {' '}
            <FaPlus /> Add Service
          </Link>
        </li>
        <li className='nav-item  ms-5'>
          <Link className='nav-link text-light linkStyle' to='/MakeAdmin'>
            {' '}
            <FaUserPlus /> Make Admin
          </Link>
        </li>
        <li className='nav-item  ms-5'>
          <Link className='nav-link text-light linkStyle' to='/ManageService'>
            {' '}
            <IoAppsOutline /> Manage Services
          </Link>
        </li>
        <li className='nav-item  ms-5'>
          <Link className='nav-link text-light linkStyle' to='/BookService'>
            {' '}
            <IoCartOutline /> Book Service
          </Link>
        </li>
        <li className='nav-item  ms-5'>
          <Link className='nav-link text-light linkStyle' to='/BookingList'>
            {' '}
            <IoList /> Booking List
          </Link>
        </li>
        <li className='nav-item  ms-5'>
          <Link className='nav-link text-light linkStyle' to='/Review'>
            <FaCommentDots /> Review
          </Link>
        </li>
        <li className='nav-item  ms-5'>
          <Link className='nav-link text-light linkStyle' to='/LogOut'>
            {' '}
            <IoEnterOutline /> LogOut
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DesBoard;
