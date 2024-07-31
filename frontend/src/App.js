// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Contact from './Components/Contact';
import AboutUs from './Components/AboutUs';
import HallDetails from './Components/HallDetails';
import Booking from './Components/BookingPage';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  const [userDetails, setUserDetails] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="App">
        <NavBar onLogin={handleLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login userDetails={userDetails} setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<Signup setUserDetails={setUserDetails} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/details/:id" element={<HallDetails />} />
          <Route path="/booking" element={<Booking />} />
          {/* Render a protected route if the user is authenticated */}
          {isAuthenticated && <Route path="/home" element={<Home />} />}
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
