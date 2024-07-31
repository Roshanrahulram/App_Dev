import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Container, Paper, Grid, CssBaseline } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from './Navbar';
import './HallDetails.css'; // Import the CSS file

const HallDetails = () => {
  const { id } = useParams();
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const navigate = useNavigate();

  const handleBooking = () => {
    alert('Booked Successfully');
    navigate('/booking');
  };

  return (
    <>
    
      <CssBaseline />
         {/* <NavBar />  */}
      <Container component="main" maxWidth="sm" sx={{ mt: 8 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Hall Details
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Details for Hall ID: {id}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Check Availability
          </Typography>
          <Box
            component="form"
            onSubmit={handleBooking}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Select Date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  InputLabelProps={{ shrink: true }}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Select Time Slot"
                  type="time"
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  InputLabelProps={{ shrink: true }}
                  sx={{ mb: 2 }}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mt: 3 }}
            >
              Book Now
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default HallDetails;
