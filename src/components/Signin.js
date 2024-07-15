import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost/server_react/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customer_name: username,
          customer_password: password,
        }),
      });

      const data = await response.json();
      if (response.ok && data.message === "เข้าสู่ระบบสำเร็จ") {
        setError('');
        navigate('/report'); // Navigate to the homepage upon successful login
      } else {
        setError(data.message || 'Login failed. Please try again.'); // Display error message from API response
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };
  const handleForgotClick = () => {
    navigate("/forgot");
  };
  return (
    <div className="form-control">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="actions">
            <a href ="/forgot" onClick={handleForgotClick}>Forgot Password?</a>
            <div className="actions2">
              <input type="submit" value="Submit"/>
            </div>
          </div>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
