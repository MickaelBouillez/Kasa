import React from 'react';
import "./navbar.css";

function Navbar() {
  return (
    <nav className='navbar'>
      <div className="navbar_logo">
        <img src="/Logo.svg" alt="Logo" />
      </div>
      <ul>
        <li>Accueil</li>
        <li>A Propos</li>
      </ul>
    </nav>
  )
}

export default Navbar