// src/Components/Footer.js
import React from 'react';
import { Container, Typography, Box, Grid, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: 'primary.main', color: 'white' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">HallBooking</Typography>
            <Typography variant="body2">
              Welcome to HallBooking, your go-to platform for booking event halls for any occasion. We are dedicated to making your events memorable and hassle-free.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Quick Links</Typography>
            <ul>
              <li><Link href="/" color="inherit">Home</Link></li>
              <li><Link href="/about" color="inherit">About</Link></li>
              <li><Link href="/contact" color="inherit">Contact</Link></li>
              <li><Link href="/login" color="inherit">Login</Link></li>
              <li><Link href="/signup" color="inherit">Sign Up</Link></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Contact Us</Typography>
            <Typography variant="body2">
              Address: 123 Event Street, HallCity, HC 12345
            </Typography>
            <Typography variant="body2">
              Email: info@hallbooking.com
            </Typography>
            <Typography variant="body2">
              Phone: +123 456 7890
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Follow Us</Typography>
            <Box>
              <Link href="#" color="inherit" sx={{ mr: 1 }}>Facebook</Link>
              <Link href="#" color="inherit" sx={{ mr: 1 }}>Twitter</Link>
              <Link href="#" color="inherit" sx={{ mr: 1 }}>Instagram</Link>
              <Link href="#" color="inherit" sx={{ mr: 1 }}>LinkedIn</Link>
            </Box>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Typography variant="body2" color="inherit">
            &copy; 2023 HallBooking. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
