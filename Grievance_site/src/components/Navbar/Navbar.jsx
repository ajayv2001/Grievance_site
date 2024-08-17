import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='nav-bar'>
        <div className='logo'>
            <h3>
                <Link to="/home">GRIEVANCE SITE</Link>
            </h3>

        </div>
        <div className='navbar-pages'>
            <Link to="/home"> Home</Link>
            <Link to="/form"> Form</Link>
            <Link to="/profile"> Profile</Link>
        </div>
      
    </div>
  )
}

export default Navbar
