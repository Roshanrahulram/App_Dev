import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const NavBar = () => {
  return (
    <AppBar position="static" className="navbar" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mr: 4 }}>
            Hall Booking System
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" component={Link} to="/" sx={{ ml: 2 }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/aboutus" sx={{ ml: 2 }}>
            About Us
          </Button>
          <Button color="inherit" component={Link} to="/contact" sx={{ ml: 2 }}>
            Contact
          </Button>
          <Button color="inherit" component={Link} to="/login" sx={{ ml: 2 }}>
            Login
          </Button>
          <Button color="inherit" component={Link} to="/signup" sx={{ ml: 2 }}>
            Signup
          </Button>
          
        

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
