import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { UserContext } from '../../helpers/UserContext';

export const Header = ({ onItemFilter}) => {

    const {globalUser, setGlobalUser} = useContext(UserContext);

    useEffect(()=>{
        setGlobalUser(null);
    }, []);

    const handleSelect = (e) => {
        const value = e.target.value;
        let filtro = false;
        if(value === '1'){
            filtro = true;
        }
        onItemFilter(filtro);
    }

  return (
    <header>

      <nav className="navbar navbar-expand-lg navbar-light bg-body-light bg-nav">
          <h1 className="navbar-brand mx-5" href="#">Bitboxer-2</h1>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>

              {globalUser !== null &&
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto separate-nav">
                            <li className="nav-item">
                                <NavLink to="/item" className="nav-link">Items</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink to="/supplier" className="nav-link">Suppliers</NavLink>
                            </li>
                        </ul>
                    <div>
                        <select className="form-select" aria-label="Default select example" onClick={handleSelect} >
                            <option value="1">ACTIVE</option>
                            <option value="2">INACTIVE</option>
                        </select>
                    </div>
                </div>
              }
        </nav>

    </header>
  )
}
