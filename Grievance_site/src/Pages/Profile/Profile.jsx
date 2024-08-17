import React from 'react';
import "./Profile.css";

const Profile = () => {
  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');

  return (
    <div className="profile-container">
      <img src="\src\assets\profile.png" alt="Profile" className="profile-image" />
      <h1 className="profile-name"> Name: {name}</h1>
      <p className="profile-email">E-mail: {email}</p>
    </div>
  );
}

export default Profile;
