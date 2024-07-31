import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './AdminPanel.css';

function UserPanel() {
  return (
    <div className="admin-panel">
      <div className="sidebar">
        <ul>
          <li><Link to="/user/dashboard">Dashboard</Link></li>
          <li><Link to="/user/profile">Profile</Link></li>
          <li><Link to="/user/bookings">My Bookings</Link></li>
        </ul>
      </div>
      <div className="main-content">
        <Routes>
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="bookings" element={<UserBookings />} />
        </Routes>
      </div>
    </div>
  );
}
export default UserPanel;