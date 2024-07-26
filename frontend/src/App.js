import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Contact from './Components/Contact';
import AboutUs from './Components/AboutUs';
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
      <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <NavBar onLogin={handleLogin} />
        <div style={{ flex: '1' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login userDetails={userDetails} setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/signup" element={<Signup setUserDetails={setUserDetails} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<AboutUs />} />
            {isAuthenticated && <Route path="/home" element={<Home />} />}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
