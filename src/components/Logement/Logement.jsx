import React from "react";
import { Link } from "react-router-dom";
import "./logement.css";

function Logement({ logementData }) {
  if (!logementData) {
    return <div>Chargement des données...</div>;
  }

  return (
    <Link to={`/fichelogement/${logementData.id}`} className="location">
      <div className="location-filter"></div>
      <img src={logementData.cover} alt="Cover" className="location-cover" />
      <div className="location_title">{logementData.title}</div>
    </Link>
  );
}

export default Logement;
