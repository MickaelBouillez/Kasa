import React from 'react';
import "./navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className='navbar'>
      <div className="navbar_logo">
        <NavLink to="/" className="lien-site">
          <img src="/Logo.svg" alt="Logo" className="navbar-logo" />
        </NavLink>
      </div>
      <ul>
        <li><NavLink to="/" className="lien-site">Accueil</NavLink></li>
        <li><NavLink to="/about" className="lien-site">A Propos</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar