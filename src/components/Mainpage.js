import React from 'react';
import './Mainpage.css';


const Mainpage = () => {

  return (
    <div className="container">
      <div className="text">
        <h1 className="orange-text">MongoDB Atlas</h1>
        <p className="large-text">The multi-cloud application data platform.</p>
        <p className="small-green-text">An integrated suite of cloud database and data services to accelerate and simplify how you build with data.</p>
        <button className="start-button">Start Free</button>
        <button className="contact-sales-button">Contact Sales</button>
      </div>
      <div className="image">
        <img src="https://blog.talent500.co/wp-content/uploads/2023/12/4U0UhRUJVw.jpg" alt="MongoDB Atlas" />
      </div>
    </div>
  );
}

export default Mainpage;
