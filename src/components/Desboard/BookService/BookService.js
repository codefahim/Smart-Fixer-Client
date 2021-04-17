import React, { useState } from 'react';
import DesBoard from '../Desboard/Desboard';
import { useForm } from 'react-hook-form';
import './BookService.css';
import SplitPay from '../Pay/SplitPay';
const BookService = () => {
  const [location, setLocation] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    setLocation(data);
    document.getElementById('location').style.display = 'none';
    document.getElementById('pay').style.display = 'block';
    console.log(data);
  }

  return (
    <div className='row w-100'>
      <div className='col-md-3 Primary-bg-Color Primary-height text-light'>
        <DesBoard />
      </div>
      <div className='col-md-9 bg-Secondary-Color'>
        <div id='location' className='text-center mt-5'>
          <h3>Enter Your Location</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className='formStyle'
              placeholder='Enter Name'
              {...register('User name', { required: true })}
            />
            <input
              className='formStyle'
              placeholder='Enter Your Location'
              {...register('LocationOne', { required: true })}
            />
            <input
              className='formStyle'
              placeholder='Enter Your Location'
              {...register('LocationTwo', { required: true })}
            />
            <input className='formSubmit' type='submit' value='Goto Pay' />
          </form>
        </div>
        <div id='pay' className='text-center mt-5'>
          {/* <Pay /> */}
          <SplitPay />
        </div>
      </div>
    </div>
  );
};

export default BookService;
