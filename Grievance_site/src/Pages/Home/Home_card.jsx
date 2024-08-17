import React from 'react';
import './Home.css';
import{useNavigate} from "react-router-dom"

const HomeCard = () => {
  const navigate =useNavigate()

  const handleClick =()=>{
    navigate("/form")
  }



  return (
    <div className="card">
      <h2>Steps for doing the Grievance Form</h2>
      <div className="steps-container">
        <div className="step">
          <h3>1</h3>
          <p><strong>Go to the form page</strong> in the navigation page.</p>
        </div>
        <div className="step-divider"></div>
        <div className="step">
          <h3>2</h3>
          <p><strong>Fill out the form</strong>.</p>
        </div>
        <div className="step-divider"></div>
        <div className="step">
          <h3>3</h3>
          <p><strong>Submit the form</strong>.</p>
        </div>
      </div>
      <button onClick={handleClick} >Start the Grievance Form</button>
    </div>
  );
}

export default HomeCard;
