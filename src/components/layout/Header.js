import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

export const Header = () => {
  return (
    <header>

      <nav className="navbar navbar-expand-lg navbar-light bg-body-light bg-nav">
          <h1 className="navbar-brand mx-5" href="#">Bitboxer-2</h1>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto separate-nav">
                  <li className="nav-item">
                      <NavLink to="/item" className="nav-link">Items</NavLink>
                  </li>
                  <li className="nav-item dropdown">
                      <NavLink to="/supplier" className="nav-link">Suppliers</NavLink>
                  </li>
              </ul>
              <form className="form-inline my-2 my-lg-0 display-row">
                  <input className="form-control mr-sm-2 rm-12" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
              </form>
          </div>
        </nav>

    </header>
  )
}
