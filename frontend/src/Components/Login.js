// src/components/LoginPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; // Ensure your CSS file is correctly linked

const Login = () => {
const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const validate = () => {
    let validationErrors = {};
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      validationErrors.password = 'Password is required';
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (formData.email === 'admin@gmail.com' && formData.password === 'admin234') {
        const adminUser = { email: 'admin@gmail.com', role: 'admin' };
        localStorage.setItem('authUser', JSON.stringify(adminUser));
        navigate('/admin/panel'); // Ensure this matches the route in App.js
      } else if (formData.email === 'user@gmail.com' && formData.password === 'user') {
        const regularUser = { email: 'user@gmail.com', role: 'user' };
        localStorage.setItem('authUser', JSON.stringify(regularUser));
        navigate('/user/dashboard');
      } else if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
        localStorage.setItem('authUser', JSON.stringify(storedUser));
        navigate('/user/dashboard');
      } else {
        setMessage('Invalid email or password');
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h3>Login Here</h3>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
        
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span className="error-message">{errors.password}</span>}
        
        <button type="submit">Login</button>
        {message && <p className="message">{message}</p>}
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;