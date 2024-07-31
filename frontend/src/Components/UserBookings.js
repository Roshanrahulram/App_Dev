import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './AdminPanel.css';

function UserBookings() {
    return (
      <div className="user-info">
        <h1>My Bookings</h1>
        <div className="user-list">
          <table>
            <thead>
              <tr>
                <th>Event</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Seminar on AI</td>
                <td>August 1, 2024</td>
                <td>
                  <Link to="/booking/1">Confirmed</Link>
                </td>
              </tr>
              <tr>
                <td>Workshop on Web Development</td>
                <td>August 5, 2024</td>
                <td>
                  <Link to="/booking/2">Pending</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
}
export default UserBookings;