import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../helpers/UserContext';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const {globalUser, setGlobalUser} = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const result = await axios.get('http://localhost:8080/erp/api/auth');

        const foundUser = result.data.find(usuario => {
            return username === usuario.username;
        });

          if (foundUser) {
            setGlobalUser(foundUser);
            console.log(globalUser);
            navigate("/item");
          } else {
            alert("Usuario o contraseña incorrectos");
          }
        
        console.log(result.data);

      }catch(error){
        console.error(error)
      };
  }

  useEffect(() => {
    console.log(globalUser);
  }, [globalUser]);

  return (
    <div className='login'>
        <h3 className="text-center text-white pt-5">Login form</h3>
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                        <form id="login-form" className="form" onSubmit={handleSubmit}>
                            <h3 className="text-center text-info">Login</h3>
                            <div className="form-group">
                                <label htmlFor="username" className="text-info">Username:</label><br/>
                                <input type="text" name="username" id="username" className="form-control" value={username} onChange={e => setUsername(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="text-info">Password:</label><br/>
                                <input type="password" name="password" id="password" className="form-control"value={password} onChange={e => setPassword(e.target.value)}/>
                            </div>
                            <div className="form-group my-3">
                                <select className="form-select" aria-label="Default select example" name='role'>
                                    <option value={role} onChange={e => setRole(e.target.value)}>ADMIN</option>
                                    <option value={role} onChange={e => setRole(e.target.value)}>USER</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="submit" name="submit" className="btn btn-info btn-md" value="submit"/>
                            </div>
                            <div id="register-link" className="text-info">
                                <NavLink to="/register" className="nav-link">Register here</NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
