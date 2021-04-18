import React, { useEffect, useState } from 'react';

const Review = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch(`https://smartfixer.herokuapp.com/OrderList`)
      .then((response) => response.json())
      .then((data) => setService(data));
  }, []);

  return (
    <section className='review'>
      <h3>What People Say About Our Service</h3>
      <div className='row'>
        {service.map((review) => (
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
