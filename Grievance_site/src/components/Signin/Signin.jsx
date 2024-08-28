import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Signin.css";  
import axios from 'axios';

export const Signin = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  });
  const toLogin = useNavigate();

  const handleNavigate = () => {
    toLogin('/log-in');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8080/", values)
      .then(res =>{
        if(res.data.Status ==="Success"){
          localStorage.setItem('name', values.name);
          localStorage.setItem('email', values.email);
          toLogin('/log-in')
        }else{
          alert("Error")
        }
      })
      .catch(err => console.log(err));

  }

 

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="textbox">
            <input type="text" placeholder='Enter your name' className='name'
              onChange={a => setValues({ ...values, name: a.target.value })} />
          </div>
          <div className="textbox">
            <input type="email" placeholder="Enter your email" className="email"
              onChange={a => setValues({ ...values, email: a.target.value })} />
          </div>
          <div className="textbox">
            <input type="password" placeholder="Enter Password" className="password"
              onChange={a => setValues({ ...values, password: a.target.value })} />
          </div>
          <button onClick={handleSubmit} type="submit" className="btn">Sign in</button>
          <button onClick={handleNavigate} className="sign-btn">Go to Login</button>
        </form>
      </div>
    </div>
  );
}
