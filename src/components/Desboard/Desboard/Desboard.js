import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { BsFillGridFill, BsCardList } from 'react-icons/bs';
import { FaPlus, FaUserPlus, FaCommentDots } from 'react-icons/fa';
import {
  IoAppsOutline,
  IoCartOutline,
  IoEnterOutline,
  IoList,
} from 'react-icons/io5';
import logo from '../../../logo.png';
import './Desboard.css';
import AddService from '../AddService/AddService';
import OrderList from '../OrderList/OrderLIst';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageService from '../ManageService/ManageService';

const DesBoard = () => {
  return (
    <div className='row w-100'>
      <div className='col-md-3 Primary-bg-Color Primary-height text-light'>
        <p>
          {' '}
          <img src={logo} alt=' ' className='img-fluid w-25' /> Dashboard
        </p>
        <ul className='navbar-nav '>
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
            <Link className='nav-link text-light linkStyle'>
              {' '}
              <IoEnterOutline /> LogOut
            </Link>
          </li>
        </ul>
      </div>
      <div className='col-md-9 bg-Secondary-Color'>
        <Switch>
          <Route path='/AddService'>
            <AddService />
          </Route>
          <Route path='/OrderList'>
            <OrderList />
          </Route>
          <Route path='/MakeAdmin'>
            <MakeAdmin />
          </Route>
          <Route path='/ManageService'>
            <ManageService />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default DesBoard;
