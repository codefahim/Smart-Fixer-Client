import React, { useEffect, useState } from 'react';
import './ManageService.css';
import DesBoard from '../Desboard/Desboard';


const ManageService = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch(`https://smartfixer.herokuapp.com/Services`)
      .then((response) => response.json())
      .then((result) => setService(result));
  }, [service]);
  const handleDelete = (id) => {
    fetch(`https://smartfixer.herokuapp.com/service/` + id, {
      method: 'DELETE',
    }).then((result) => {
      alert('Your Product Delete was successful');
    });
  };
  return (
    <div className='row w-100'>
      <div className='col-md-3 Primary-bg-Color Primary-height text-light'>
        <DesBoard />
      </div>
      <div className='col-md-9 bg-Secondary-Color'>
        {' '}
        <div>
          <h4 className='test-center my-5'>Manage Service</h4>
          <table>
            <thead>
              <tr>
                <td>Service Image</td>
                <td>Service Id</td>
                <td>Service Title</td>
                <td>Action</td>
              </tr>
            </thead>
            {service.map((item) => (
              <>
                {/* <table> */}
                <tbody>
                  <tr>
                    <td className='tdFirst'>
                      {' '}
                      <img src={item.image} alt='' className='w-25' />{' '}
                    </td>
                    <td>{item._id}</td>

                    <td>{item.user.ServiceTitle}</td>
                    <td>
                      <button
                        className='btn btn-danger'
                        onClick={() => handleDelete(item._id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                </tbody>
                {/* </table> */}
              </>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageService;
