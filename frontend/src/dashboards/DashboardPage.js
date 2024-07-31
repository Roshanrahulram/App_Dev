import React from 'react';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import Navbar from './DashboardPage.css';

// Styled components
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

const data = [
  { name: 'Jan', Repairs: 30, Maintenance: 40 },
  { name: 'Feb', Repairs: 20, Maintenance: 30 },
  { name: 'Mar', Repairs: 27, Maintenance: 35 },
  { name: 'Apr', Repairs: 50, Maintenance: 60 },
  { name: 'May', Repairs: 35, Maintenance: 45 },
  { name: 'Jun', Repairs: 40, Maintenance: 50 },
];

const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Main>
          <Container maxWidth="lg">
            <Typography variant="h4" component="h1" gutterBottom>
              Vehicle Repair Hub Dashboard
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 400 }}>
                  <Typography variant="h6">Monthly Repair and Maintenance</Typography>
                  <Box sx={{ flexGrow: 1, mt: 2 }}>
                    <LineChart
                      width={500}
                      height={300}
                      data={data}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="Repairs" stroke="#8884d8" />
                      <Line type="monotone" dataKey="Maintenance" stroke="#82ca9d" />
                    </LineChart>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 400 }}>
                  <Typography variant="h6">Weekly Repair Requests</Typography>
                  <Box sx={{ flexGrow: 1, mt: 2 }}>
                    <BarChart
                      width={500}
                      height={300}
                      data={data}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Repairs" fill="#8884d8" />
                      <Bar dataKey="Maintenance" fill="#82ca9d" />
                    </BarChart>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 400 }}>
                  <Typography variant="h6">Annual Trends</Typography>
                  <Box sx={{ flexGrow: 1, mt: 2 }}>
                    <LineChart
                      width={500}
                      height={300}
                      data={data}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="Repairs" stroke="#8884d8" />
                      <Line type="monotone" dataKey="Maintenance" stroke="#82ca9d" />
                    </LineChart>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Main>
      </div>
    </>
  );
};
export default DashboardPage;
