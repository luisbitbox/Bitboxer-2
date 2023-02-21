import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {
  const[credentials, setCredentiasl] = useState({});

  const logearse = (e) => {
      e.preventDefault();
      const newUser = {
        username: e.target.username.value,
        password: e.target.password.value
      }
      console.log("Logueado usuario: ", newUser.username + " - " + newUser.password);
  }

  const sedLoginRequest = async (e) => {
    try {
      const reqBody = {
        username: e.target.username.value,
        password: e.target.password.value
      }
      const result = await axios.get("http://localhost:8080/erp/api/login", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "post",
        body: JSON.stringify(reqBody)
      });
      setCredentiasl(result.data);
    } catch (error) {
        console.log(error);
    }
  }


  return (
    <div className='login'>
        <h3 className="text-center text-white pt-5">Login form</h3>
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                        <form id="login-form" className="form" onSubmit={sedLoginRequest}>
                            <h3 className="text-center text-info">Login</h3>
                            <div className="form-group">
                                <label htmlFor="username" className="text-info">Username:</label><br/>
                                <input type="text" name="username" id="username" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="text-info">Password:</label><br/>
                                <input type="password" name="password" id="password" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="remember-me" className="text-info"><span>Remember me</span> 
                                <span><input id="remember-me" name="remember-me" type="checkbox"/></span></label><br/>
                                <input type="submit" name="submit" className="btn btn-info btn-md" value="submit"/>
                            </div>
                            <div id="register-link" className="text-right">
                                <a href="#" className="text-info">Register here</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
