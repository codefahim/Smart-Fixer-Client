import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css';
const AddService = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className='text-center mt-5'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className='formStyle'
          placeholder=' Service Title'
          {...register('Service Title', { required: true })}
        />
        <textarea
          className='formStyle'
          placeholder='Description'
          {...register('Description', { required: true })}
        />
        <input
          className='formStyle'
          type='file'
          {...register('Image', { required: true })}
        />
        <input className='formSubmit' type='submit' />
      </form>
    </div>
  );
};

export default AddService;
