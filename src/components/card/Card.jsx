import React from 'react';
import "./card.css"
import Logement from "../Logement/Logement.jsx"

function Card() {
  return (
    <div className='card'>
      <Logement/>
      <Logement/>
      <Logement/>
      <Logement/>
      <Logement/>
      <Logement/>
    </div>
  )
}

export default Card