import React from 'react';
import DesBoard from '../Desboard/Desboard';
import { useHistory } from 'react-router-dom';
const LogOut = () => {
  let history = useHistory();
  sessionStorage.clear();
  history.push('/home');
  return (
    <div className='row w-100'>
      <div className='col-md-3 Primary-bg-Color Primary-height text-light'>
        <DesBoard />
      </div>
      <div className='col-md-9 bg-Secondary-Color'></div>
    </div>
  );
};

export default LogOut;
