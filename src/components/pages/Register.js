import React, { useEffect }  from 'react'
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';

export const Register = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        
      }, []);
  
      const saveUser = async (e) =>{
          e.preventDefault();
        
          const user = {
            username: e.target.username.value,
            password: e.target.password.value,
            role: e.target.role.value
          };
        
        
          // Verifica si alguno de los campos está vacío
          if(!user.username || !user.password || !user.role){
            alert("Los campos no pueden estar vacíos")
            return
          }
        
          try {
            // Hace una solicitud POST al servidor para guardar el artículo
            const response = await axios.post("http://localhost:8080/erp/api/auth", user);

            console.log(user.username + " - " + user.password + " - " + user.role);
            navigate("/");
            
            return response;
          } catch (error) {
            console.log(error);
          }
        
        }


  return (
    <div className='content'>
        <h2>Register</h2>
        <form className='w-25' onSubmit={saveUser}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                    <input type="text" className="form-control" id="" aria-describedby="emailHelp"  name="username" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputEmail1" name="password" />
                </div>
                <div className="mb-3">
                    <select className="form-select" aria-label="Default select example" name='role'>
                        <option value="ADMIN">ADMIN</option>
                        <option value="USER">USER</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Save</button>
            </form>
    </div>
  )
}
