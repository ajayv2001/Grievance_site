import React from 'react';
import "./Home.css";
import HomeCard from './Home_card';
import Navbar from '../../components/Navbar/Navbar';


const Home = () => {
  return (
  <>
    <Navbar />
    <div className="home-container">
        <img className='img' src="Grievance_site/src/assets/pexels-julia-larson-6456305.jpg" alt="Grievance Portal" />
        <div className="title-overlay">
            <h1>Welcome to Our Grievance Portal</h1>
            <p>Your Voice Matters</p>
        </div>
    </div>
    <div  className='home-card'>
      <HomeCard/>

    </div>
  </>
  )
}

export default Home;
