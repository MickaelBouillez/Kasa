import React from 'react';
import "../navbar/Navbar.css";

function Navbar() {
  return (
    <nav className='navbar'>
      <div className="navbar_logo">
        <img src="" alt="Logo" />
      </div>
      <ul>
        <li>Accueil</li>
        <li>A Propos</li>
      </ul>
    </nav>
  )
}

export default Navbar