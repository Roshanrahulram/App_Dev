import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './AdminPanel.css';

function Dashboard() {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="stats">
          <div className="card">
            <h2>Total Bookings</h2>
            <p>120</p>
          </div>
          <div className="card">
            <h2>Pending Approvals</h2>
            <p>5</p>
          </div>
          <div className="card">
            <h2>Upcoming Events</h2>
            <p>3</p>
          </div>
        </div>
        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <ul>
            <li>John Doe booked Hall A</li>
            <li>Jane Smith booked Hall B</li>
            <li>Sam Wilson booked Hall C</li>
          </ul>
        </div>
      </div>
    );
  }
export default Dashboard;  