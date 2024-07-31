import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './AdminPanel.css';

function UserProfile() {
    return (
      <div className="profile">
        <h1>Profile</h1>
        <div className="profile-info">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john@example.com</p>
        </div>
        <div className="profile-actions">
          <button>Edit Profile</button>
          <button>Change Password</button>
        </div>
      </div>
    );
  }

export default UserProfile;