// src/Components/AboutUs.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, CssBaseline } from '@mui/material';

const AboutUs = () => {
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!message) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Message:', message);
    setMessage('Message sent successfully.');
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
              border: '2px solid transparent',
              borderRadius: '10px',
              p: 3,
              boxShadow: 3,
              bgcolor: 'rgba(255, 255, 255, 0.8)',
            }}
          >
            <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
              About Us
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              We are a hall booking service dedicated to providing the best experience for our customers. Our mission is to simplify the process of booking venues for any occasion, making it easy and stress-free.
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="message"
              label="Message"
              name="message"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={!!errors.message}
              helperText={errors.message}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Message
            </Button>
            {message && <Typography color="success.main">{message}</Typography>}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AboutUs;
