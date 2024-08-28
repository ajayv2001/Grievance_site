import React from 'react';
import "./Profile.css";
import Navbar from '../../components/Navbar/Navbar';

const Profile = () => {
  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');

  return (
    <>
    <Navbar/>
    <div className="profile-container">
      <img src=".\public\profile.png" alt="Profile" className="profile-image" />
      <h1 className="profile-name"> Name: {name}</h1>
      <p className="profile-email">E-mail: {email}</p>
    </div>
    </>
  );
}

export default Profile;
