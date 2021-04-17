import React, { useEffect, useState } from 'react';
import DesBoard from '../Desboard/Desboard/Desboard';
import { FaRegTrashAlt, FaRegCreditCard } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import './Order.css';
const Order = () => {
  let history = useHistory();
  const [order, setOrder] = useState([]);
  const [remove, setRemove] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/OrderList`)
      .then((response) => response.json())
      .then((result) => setOrder(result));
  }, [remove]);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/removeOrder/` + id, {
      method: 'DELETE',
    }).then((result) => {
      alert('Your Product Delete was successful');
      setRemove(!remove);
    });
  };
  const handlePay = () => {
    history.push('/BookService');
    console.log('pay');
  };
  return (
    <div className='row w-100'>
      <div className='col-md-3 Primary-bg-Color Primary-height text-light'>
        <DesBoard />
      </div>
      <div className='col-md-9 bg-Secondary-Color'>
        <div>
          <h4 className='test-center my-5'>List of Your Ordered Projects</h4>
          <table>
            <thead>
              <tr>
                <td>Email Address</td>
                <td>Image</td>
                <td>Status</td>
                <td>Remove</td>
                <td>Pay</td>
              </tr>
            </thead>
            {order?.map((item) => (
              <>
                <tbody>
                  <tr>
                    <td>{item.email}</td>
                    <td className='tdFirst'>
                      {' '}
                      <img src={item.image} alt='' className='w-25' />{' '}
                    </td>
                    <td>
                      <code>{item.status}</code>
                    </td>
                    <td>
                      <FaRegTrashAlt
                        className='iconOfAction'
                        onClick={() => handleDelete(item._id)}
                      />
                    </td>
                    <td>
                      <FaRegCreditCard
                        className='iconOfAction'
                        onClick={() => handlePay()}
                      />
                    </td>
                  </tr>
                </tbody>
              </>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
