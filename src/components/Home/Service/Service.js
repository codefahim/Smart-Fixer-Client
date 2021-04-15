import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/Services`)
      .then((response) => response.json())
      .then((data) => setService(data));
  }, []);
  console.log(service);
  const handleDivClick = () => {
    console.log('kaj kore');
  };
  return (
    <section>
      <h2 className='Green-Color fs-1 text-center'>
        Our <span className='Color-Apple'>Services</span>
      </h2>
      <div className='row'>
        {service.map((item) => (
          <div className='col-md-4 my-2'>
            <div onClick={handleDivClick} className='card cardHover'>
              <img
                src={item.image}
                class='card-img-top image-fluid w-25 m-auto mt-4'
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
