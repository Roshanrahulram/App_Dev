import React from 'react';
import { Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ mt: 8, textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to the Hall Booking System
      </Typography>
      <Typography variant="body1">
        This is the home page. You can navigate to login or signup using the navigation bar above.
      </Typography>
    </Box>
  );
};

export default Home;
