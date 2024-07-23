import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
    if (username && password) {
      // For demonstration, assume signup is always successful
      setMessage('Signup successful!');
    } else {
      setMessage('Please fill out all fields');
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
      {message && (
        <p className={message === 'Signup successful!' ? 'success' : 'error'}>{message}</p>
      )}
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
};

export default Signup;
