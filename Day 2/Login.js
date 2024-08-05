import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy authentication logic
    if (username === 'admin' && password === 'admin') {
      const admin = { role: 'admin', name: 'Admin User' }; // Replace with actual admin data
      localStorage.setItem('authUser', JSON.stringify(admin));
      onLogin(); // Notify parent component of successful login
      navigate('/admin/dashboard'); // Redirect to admin panel
    } else if (username === 'user' && password === 'user') {
      const user = { role: 'user', name: 'John Doe' }; // Replace with actual user data
      localStorage.setItem('authUser', JSON.stringify(user));
      onLogin(); // Notify parent component of successful login
      navigate('/user/dashboard'); // Redirect to user panel
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
