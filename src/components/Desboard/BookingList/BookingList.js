import React, { useEffect, useState } from 'react';
import DesBoard from '../Desboard/Desboard';
import './BookingList.css';

const BookingList = () => {
  const [paidService, setPaidService] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/OrderList`)
      .then((response) => response.json())
      .then((data) => setPaidService(data));
  }, []);
  console.log(paidService);
  return (
    <div className='row w-100'>
      <div className='col-md-3 Primary-bg-Color Primary-height text-light'>
        <DesBoard />
      </div>
      <div className='col-md-9 bg-Secondary-Color'>
        <h4 className='text-center my-5'>List Of Your Booked Service</h4>
        <code>Note: You can see the service here without payment.</code>
        <div className='row'>
          {paidService.map((service) => (
            <div className='col-md-4'>
              {service.status == 'paid' && (
                <div>
                  <div className='card'>
                    <img
                      src={service.image}
                      className='card-img-top img-fluid w-25 m-auto py-3'
                      alt='...'
                    />
                    <code
                      className={
                        'btn ' +
                        (service.shipment == 'pending'
                          ? 'btn-danger'
                          : 'btn-success')
                      }
                    >
                      {service.shipment}
                    </code>
                    <div className='card-body'>
                      <h5 className='card-title'>
                        {service.user.ServiceTitle}
                      </h5>
                      <p className='card-text'>{service.user.Description}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingList;
