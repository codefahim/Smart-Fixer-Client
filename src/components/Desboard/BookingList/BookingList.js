import React, { useEffect, useState } from 'react';
import DesBoard from '../Desboard/Desboard';
import './BookingList.css';

const BookingList = () => {
  const [paidService, setPaidService] = useState([]);
  const [singleService, setSingleService] = useState([]);
  const email = sessionStorage.getItem('email');
  const admin = sessionStorage.getItem('admin');
  useEffect(() => {
    fetch(`https://smartfixer.herokuapp.com/OrderList`)
      .then((response) => response.json())
      .then((data) => setPaidService(data));
  }, []);

   if (admin === 'false') {
     fetch(`https://smartfixer.herokuapp.com/SingleOrderList/` + email)
       .then((response) => response.json())
       .then((result) => setSingleService(result));
   }
   const selectValue = (id) => {
     const selectorValue = document.getElementById('shipment')?.value;
     fetch(`https://smartfixer.herokuapp.com/updateShipment/` + id, {
       method: 'PATCH',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ selectorValue }),
     })
       .then((response) => response.json())
       .then((result) => {
         if (result) {
           alert('Your Shipment Status Updated.');
           let location = window.location;
           location.reload();
         }
       });
     console.log(selectorValue);
   };
 
  return (
    <div className='row w-100'>
      <div className='col-md-3 Primary-bg-Color Primary-height text-light'>
        <DesBoard />
      </div>
      <div className='col-md-9 bg-Secondary-Color'>
        <h4 className='text-center my-5'>List Of Your Booked Service</h4>
        <code>Note: You can see the service here without payment.</code>
        <div className='row'>
          {admin === 'true' && (
            <>
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

                        <select
                          name='Shipment'
                          onChange={() => selectValue(service._id)}
                          id='shipment'
                        >
                          <option value='Select'>Select</option>
                          <option value='Pending'>Pending</option>
                          <option value='Delivered'>Delivered</option>
                        </select>
                        {service.shipment === 'Pending' && (
                          <code className='btn btn-danger'>
                            {service.shipment}
                          </code>
                        )}
                        {service.shipment === 'Delivered' && (
                          <code className='btn btn-success'>
                            {service.shipment}
                          </code>
                        )}

                        <div className='card-body'>
                          <h5 className='card-title'>
                            {service.user.ServiceTitle}
                          </h5>
                          <p className='card-text'>
                            {service.user.Description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </>
          )}

          {admin === 'false' && (
            <>
              {singleService.map((service) => (
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
                          <p className='card-text'>
                            {service.user.Description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingList;
