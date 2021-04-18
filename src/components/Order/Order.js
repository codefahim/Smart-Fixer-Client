import React, { useEffect, useState } from 'react';
import DesBoard from '../Desboard/Desboard/Desboard';
import { FaRegTrashAlt, FaRegCreditCard } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import './Order.css';
const Order = () => {
  let history = useHistory();
  const [order, setOrder] = useState([]);
  const [singleOrder, setSingleOrder] = useState([]);
  const [remove, setRemove] = useState(false);
  const email = sessionStorage.getItem('email');
  const admin = sessionStorage.getItem('admin');
  console.log(admin, email);
  useEffect(() => {
    fetch(`https://smartfixer.herokuapp.com/OrderList`)
      .then((response) => response.json())
      .then((result) => setOrder(result));
  }, [remove]);
  if (admin === 'false') {
    fetch(`https://smartfixer.herokuapp.com/SingleOrderList/` + email)
      .then((response) => response.json())
      .then((result) => setSingleOrder(result));
  }

  const handleDelete = (id) => {
    fetch(`https://smartfixer.herokuapp.com/removeOrder/` + id, {
      method: 'DELETE',
    }).then((result) => {
      alert('Your Product Delete was successful');
      setRemove(!remove);
    });
  };
  const handlePay = (id) => {
    history.push(`/BookService/${id}`);
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
            {admin === 'true' && (
              <>
                {' '}
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
                            onClick={() => handlePay(item._id)}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </>
                ))}
              </>
            )}

            {admin === 'false' && (
              <>
                {' '}
                {singleOrder?.map((item) => (
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
                            onClick={() => handlePay(item._id)}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </>
                ))}
              </>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
