import React, { useEffect, useState } from 'react';
import DesBoard from '../Desboard/Desboard';

const PostReview = () => {
  const [paidService, setPaidService] = useState([]);
  console.log(paidService);
  useEffect(() => {
    fetch(`https://smartfixer.herokuapp.com/OrderList`)
      .then((response) => response.json())
      .then((data) => setPaidService(data));
  }, []);
  const handleSetReview = (id) => {
    const review = document.getElementById('customerReview').value;
    if (review !== '') {
      fetch(`https://smartfixer.herokuapp.com/postReview/` + id, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ review }),
      }).then((json) => console.log(json));
    }
  };
  return (
    <div className='row w-100'>
      <div className='col-md-3 Primary-bg-Color Primary-height text-light'>
        <DesBoard />
      </div>
      <div className='col-md-9 bg-Secondary-Color'>
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

                    <div className='card-body'>
                      <h5 className='card-title'>
                        {service.user.ServiceTitle}
                        <textarea
                          id='customerReview'
                          placeholder={service.review}
                          required
                        ></textarea>
                        <button onClick={() => handleSetReview(service._id)}>
                          Review
                        </button>
                      </h5>
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

export default PostReview;
