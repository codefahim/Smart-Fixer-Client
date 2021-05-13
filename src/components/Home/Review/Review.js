import React, { useEffect, useState } from 'react';
import './review.css';
const Review = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch(`https://smartfixer.herokuapp.com/OrderList`)
      .then((response) => response.json())
      .then((data) => setService(data));
  }, []);

  return (
    <section className='review'>
      <h3 style={{  fontFamily:  'block'  }} className='text-center'>
        
        What People Say About Our Service
      
      </h3>
      <div className='row'>
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

        {service.length !== 0 &&
          service.map((review) => (
            <>
              {console.log(review)}
              {review?.review !== 'No review' && (
                <div className='col-md-4'>
                  <>
                    <div className='card '>
                      <img
                        src={review.image}
                        className='card-img-top'
                        className='img-fluid w-25 m-auto'
                        alt='...'
                      />
                      <div className='card-body'>
                        <h5 className='card-title'>{review.email}</h5>
                        <p className='card-text'>{review.review}</p>
                        <code>{review.user.ServiceTitle}</code>
                      </div>
                    </div>{' '}
                  </>
                </div>
              )}
            </>
          ))}
      </div>
    </section>
  );
};

export default Review;
