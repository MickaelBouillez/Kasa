import React, { useState, useEffect } from "react";
import "./logement.css";

function Logement({ logementData }) {
  if (!logementData) {
    return <div>Chargement des données...</div>;
  }

  return (
    <div className="location">
      <div className="location-filter"></div>
      <img src={logementData.cover} alt="Cover" className="location-cover" />
      <div className="location_title">{logementData.title}</div>
    </div>
  );
}

export default Logement;
