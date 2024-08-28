import React, { useState } from 'react'
import{Link,useNavigate} from"react-router-dom"
import axios from 'axios'
import "./Login.css"
const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: ""
      });
      const toLogin = useNavigate();
    
      const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/log-in", values)
          .then(res =>{
            if(res.data.Status ==="Success"){
              toLogin('/home')
            }else{
              alert(res.data.Error)
            }
          })
          .catch(err => console.log(err));
      }
  return (
    <div className="login-container">
        <div className="login-box">
            <h2>Login In</h2>
            <form onSubmit={handleSubmit}>
                <div className="textbox">
                    <input type="email" placeholder="Enter your email" className="email"
                     onChange={a => setValues({ ...values, email: a.target.value })}
                    />
                </div>
                <div className="textbox">
                    <input type="password" placeholder="Enter Password" className="password"
                     onChange={a => setValues({ ...values, password: a.target.value })}
                    
                    />
                </div>
                <button type="submit" className="btn">Log In</button>
                <Link to="/">Don't have an account</Link>
                
            </form>
        </div>
    </div>
  )
}

export default Login
