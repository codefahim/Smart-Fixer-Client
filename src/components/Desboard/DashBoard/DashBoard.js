import React from 'react';
import DesBoard from '../Desboard/Desboard';

const DashBoard = () => {
  const admin = sessionStorage.getItem('admin');
  return (
    <div className='row w-100'>
      <div className='col-md-3 Primary-bg-Color Primary-height text-light'>
        <DesBoard />
      </div>
      <div className='col-md-9 bg-Secondary-Color'>
        {admin === 'true' && <h2>Welcome MR. Admin</h2>}
        {admin !== 'true' && <h2>Welcome Dear Sir.</h2>}
      </div>
    </div>
  );
};

export default DashBoard;
