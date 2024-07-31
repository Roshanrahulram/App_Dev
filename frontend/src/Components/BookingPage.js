// src/Components/BookingPage.js
import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Container, Paper, Grid, CssBaseline } from '@mui/material';
import NavBar from './Navbar';


const BookingPage = () => {
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [hall, setHall] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your booking logic here, e.g., sending data to an API
    alert('Booking Confirmed');
  };

  return (
    <>
      <CssBaseline />
      {/* <NavBar /> */}
      <Container component="main" maxWidth="md" sx={{ mt: 8 }} className="background booking-background">
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Book a Hall
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
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
                  label="Select Hall"
                  select
                  value={hall}
                  onChange={(e) => setHall(e.target.value)}
                  SelectProps={{ native: true }}
                  sx={{ mb: 2 }}
                >
                  <option value="">Select a hall</option>
                  <option value="1">Vankatram Hall</option>
                  <option value="2">Conference Hall</option>
                  <option value="3">Seminar Hall</option>
                  <option value="4">Meeting Hall</option>
                  <option value="5">Event Hall</option>
                  <option value="6">Banquet Hall</option>
                </TextField>
              </Grid>
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
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Additional Information"
                  multiline
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
              Confirm Booking
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default BookingPage;


