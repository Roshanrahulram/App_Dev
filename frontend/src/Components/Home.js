import React from 'react';
import { Typography, Card, CardContent, CardMedia, CardActions, Button, Grid, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const cardData = [
  { title: 'Vankatram Hall', description: 'Perfect venue for weddings.', image: 'https://th.bing.com/th/id/OIP.kbfUpO_SFr7IsgucmVA4aAHaEo?rs=1&pid=ImgDetMain', id: 1 },
  { title: 'Conference Hall', description: 'Ideal for business meetings.', image: 'https://3.imimg.com/data3/SP/CM/MY-10122614/conference-hall.jpg', id: 2 },
  { title: 'Seminar Hall', description: 'Great for birthday parties.', image: 'https://ssipjalgaon.org/public/amenities/ac-seminar-hall-1.jpg', id: 3 },
  { title: 'Meeting Hall', description: 'Perfect for team meetings.', image: 'https://th.bing.com/th/id/OIP.jlQkJU1W8P_2h68GxUuDUgHaEK?rs=1&pid=ImgDetMain', id: 4 },
  { title: 'Event Hall', description: 'Suitable for large events.', image: 'https://arihantcollege-bwd.ac.in/wp-content/uploads/2021/09/Auditorium-hall-2-768x511.jpg', id: 5 },
  { title: 'Lecture Hall', description: 'Ideal for banquets and receptions.', image: 'https://brighttreestudios.com/wp-content/uploads/2021/05/CalU-3-1024x679.jpg', id: 6 },
];

const Home = () => {
  return (
    <div>
    <Container sx={{ mt: 8, mb: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom textAlign="center">
        Welcome to the Hall Booking System
      </Typography>
      <Typography variant="body1" textAlign="center" sx={{ mb: 4 }}>
        Explore our various venues and find the perfect space for your event.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {cardData.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt={card.title}
                height="140"
                image={card.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  component={Link}
                  to={`/details/${card.id}`}  // Correct template literal
                >
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
      <Footer/>
    </div>
  );
};

export default Home;
