import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './style.css'
const SOList = () => {
  const [salesOrders, setSalesOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost/server_react/get-sales-orders.php')
      .then(response => {
        console.log('Sales Orders:', response.data);
        setSalesOrders(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the sales orders!', error);
      });
  }, []);

  const handleDoubleClick = (so_id) => {
    console.log(`Navigating to /so-detail/${so_id}`);
    navigate(`/so-detail/${so_id}`);
  };

  return (
    <div>
      <h1>Sales Orders List</h1>
      <table>
        <thead>
          <tr>
            <th>SO ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
          </tr>
        </thead>
        <tbody>
          {salesOrders.length > 0 ? (
            salesOrders.map(order => (
              <tr key={order.so_id} onDoubleClick={() => handleDoubleClick(order.so_id)}>
                <td>{order.so_id}</td>
                <td>{order.customer_name}</td>
                <td>{order.order_date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No sales orders found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SOList;
