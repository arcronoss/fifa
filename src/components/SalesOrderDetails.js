import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './style.css';

const SODetail = () => {
  const { so_id } = useParams();
  const [orderDetails, setOrderDetails] = useState([]);
  const [customerName, setCustomerName] = useState('');

  useEffect(() => {
    console.log(`Fetching details for so_id: ${so_id}`);
    axios.get(`http://localhost/server_react/get-so-details.php?so_id=${so_id}`)
      .then(response => {
        console.log('Order details:', response.data);
        setCustomerName(response.data.length > 0 ? response.data[0].customer_name : '');
        setOrderDetails(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the order details!', error);
      });
  }, [so_id]);

  return (
    <div className="general-container so-detail">
      <h1>Sales Order Details</h1>
      <h2>Customer Name: {customerName}</h2>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {orderDetails.length > 0 ? (
            orderDetails.map(detail => (
              <tr key={detail.product_id}>
                <td>{detail.product_id}</td>
                <td>{detail.product_name}</td>
                <td>{detail.quantity}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No order details found</td>
            </tr>
          )}
        </tbody>
      </table>
      <Link to="/" className="back-button">Back</Link>
    </div>
  );
};

export default SODetail;
