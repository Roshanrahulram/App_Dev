import React from 'react';
import { Link } from 'react-router-dom';
import './AdminPanel.css';

function Profile() {
    return (
      <div className="profile">
        <h1>Profile</h1>
        <div className="profile-info">
          <p><strong>Name:</strong> Admin</p>
          <p><strong>Email:</strong> admin@example.com</p>
          <p><strong>Role:</strong> Administrator</p>
        </div>
        <Link to="/dashboard">Go to Dashboard</Link>
      </div>
    );
}
export default Profile;