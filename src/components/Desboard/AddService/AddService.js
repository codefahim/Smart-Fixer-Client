import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css';
const axios = require('axios');
const AddService = () => {
  const [imageUrl, setUrl] = useState('');
  console.log(imageUrl);
  const handleImageOnChange = (event) => {
    const imageData = new FormData();
    imageData.set('key', 'f79e33f36bcdd70f78786ea09e70ae26');
    imageData.append('image', event.target.files?.[0]);

    axios
      .post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        // handle success
        let imageUrl = response?.data.data.display_url;
        console.log(imageUrl);
        setUrl(imageUrl);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  function onSubmit(data) {
    const userData = {
      user: data,
      image: imageUrl,
    };

    if (imageUrl !== '') {
      fetch(`http://localhost:5000/addService`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      }).then((result) => {
        if (result) {
          alert('New Service Successfully inserted!');
        }
      });
      const imageUrl = '';
      setUrl(imageUrl);
    }
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className='text-center mt-5'>
      <h3>Add Your Service</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className='formStyle'
          placeholder=' Service Title'
          {...register('ServiceTitle', { required: true })}
        />
        <textarea
          className='formStyle'
          placeholder='Description'
          {...register('Description', { required: true })}
        />
        <input
          className='formStyle'
          placeholder='Enter Service price'
          type='text'
          {...register('Price', { required: true })}
        />
        <input
          className='formStyle'
          type='file'
          {...register('ImageOfService', { required: true })}
          onChange={handleImageOnChange}
        />

        {imageUrl !== '' && (
          <input className='formSubmit' type='submit' value='Add Service' />
        )}
        {imageUrl == '' && (
          <input
            className='formSubmit'
            type='submit'
            value='Add Service'
            disabled
          />
        )}
      </form>
    </div>
  );
};

export default AddService;
