import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box, CssBaseline } from '@mui/material';

const Login = ({ userDetails, setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if (!password) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (userDetails && username === userDetails.username && password === userDetails.password) {
      setIsAuthenticated(true);
      navigate('/home');
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          width: '100vw',
          backgroundImage: 'url(https://www.oyorooms.com/blog/wp-content/uploads/2018/01/features-1080x720.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          margin: 0,
          padding: 0,
        }}
      >
        <Container maxWidth="xs">
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '2px solid #007bff',
              borderRadius: '10px',
              p: 3,
              boxShadow: 3,
              bgcolor: 'rgba(255, 255, 255, 0.8)',
            }}
          >
            <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
              Login
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={!!errors.username}
              helperText={errors.username}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            {message && <Typography color="error">{message}</Typography>}
            <Typography variant="body2" sx={{ mt: 2 }}>
              Don't have an account? <Link to="/signup">Signup</Link>
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Login;
