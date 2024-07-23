import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Authentication App</h1>
          <nav>
            <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
          </nav>
       <Routes>
            <Route path="/login" element={<Login/>}>

            </Route>
            <Route path="/signup" element={<Signup/>}>
            </Route>
            
      </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
