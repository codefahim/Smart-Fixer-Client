import React from 'react';
import DesBoard from '../Desboard/Desboard';

const OrderLIst = () => {
    return (
      <div className='row w-100'>
        <div className='col-md-3 Primary-bg-Color Primary-height text-light'>
          <DesBoard />
        </div>
        <div className='col-md-9 bg-Secondary-Color'>this order</div>
      </div>
    );
};

export default OrderLIst;