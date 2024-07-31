import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './AdminPanel.css';

function UserInfo() {
    return (
      <div className="user-info">
        <h1>User Info</h1>
        <div className="user-list">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Bookings</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>john@example.com</td>
                <td>3</td>
                <td><button>View Details</button></td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>jane@example.com</td>
                <td>2</td>
                <td><button>View Details</button></td>
              </tr>
              <tr>
                <td>Sam Wilson</td>
                <td>sam@example.com</td>
                <td>5</td>
                <td><button>View Details</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
export default UserInfo;