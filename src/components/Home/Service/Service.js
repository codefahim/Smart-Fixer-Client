import React, { useEffect, useState } from 'react';
import './Service.css';
import { useHistory } from "react-router-dom";



const Service = () =>
{
  var email = sessionStorage.getItem('email');
  const tokenId = sessionStorage.getItem('token');
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch(`https://smartfixer.herokuapp.com/Services`)
      .then((response) => response.json())
      .then((data) => setService(data));
  }, []);
  let history = useHistory();
  const handleDivClick = (item) => {
    delete item._id;
    // history.push('/Order');
    console.log(item);
    if (tokenId == null) {
      history.push('/Login');
    } else {
      item['email'] = email;
      item['status'] = 'Not Paid';
      item['shipment'] = 'Pending';
      item['review'] = 'No review';
      fetch(`https://smartfixer.herokuapp.com/ProductAdd`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      }).then((result) => {
        if (result) {
          alert('Product Successfully added!');
        }
      });
    }
  };
  return (
    <section id='service'>
      <h2 className='Green-Color fs-1 text-center'>
        Our <span className='Color-Apple'>Services</span>
      </h2>

      {service.length === 0 && (
        <div className='row'>
          <div className='col-md-4'>
            <div className='loading-animation'>
              <div className='image-box m-auto my-3'></div>
              <div className='text-animation m-auto my-3 '></div>
              <div className='text-animation m-auto my-3'></div>
              <div className='text-animation m-auto my-3'></div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='loading-animation'>
              <div className='image-box m-auto my-3'></div>
              <div className='text-animation m-auto my-3 '></div>
              <div className='text-animation m-auto my-3'></div>
              <div className='text-animation m-auto my-3'></div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='loading-animation'>
              <div className='image-box m-auto my-3'></div>
              <div className='text-animation m-auto my-3 '></div>
              <div className='text-animation m-auto my-3'></div>
              <div className='text-animation m-auto my-3'></div>
            </div>
          </div>
        </div>
      )}
      <div className='row'>
        {service.map((item) => (
          <div className='col-md-4 my-2'>
            <div
              onClick={() => handleDivClick(item)}
              className='card cardHover'
            >
              <img
                src={item.image}
                className='card-img-top image-fluid w-25 m-auto mt-4'
                alt='...'
              />
              <div className='card-body text-center'>
                <h3 className='Color-Apple fs-5 text-center'>
                  $ {item.user.Price}
                </h3>
                <h5 className='card-title Color-Apple'>
                  {item.user.ServiceTitle}
                </h5>
                <p className='card-text'>{item.user.Description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
