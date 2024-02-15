import React, { useState, useEffect } from 'react';
import "./card.css"
import Logement from "../Logement/Logement.jsx"

function Card() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    // Chargez les données à partir du fichier JSON lorsque le composant est monté
    fetch("/Logement.json") // Correction du chemin d'accès au fichier JSON
      .then(response => response.json())
      .then(data => setLogements(data))
      .catch(error => console.error("Erreur lors du chargement des données:", error));
  }, []);

  return (
    <div className='card'>
      {/* Affichez chaque instance de Logement avec les données du fichier JSON */}
      {logements.map((logement, index) => (
        <Logement key={index} logementData={logement} />
      ))}
    </div>
  )
}

export default Card;
