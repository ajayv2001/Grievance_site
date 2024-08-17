import './App.css'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Form from './Pages/Form/Form';
import Login from './components/Login/Login';
import { Signin } from './components/Signin/Signin';
function App() {
  <link href="https://fonts.googleapis.com/css2?family=Barlow&family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Inter:wght@400;600;700&family=Kanit&family=Poppins&family=Roboto&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin/>}/>
        <Route path="/log-in" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/form" element={<Form/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
    

  )
}

export default App
