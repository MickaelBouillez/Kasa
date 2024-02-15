import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "./fichelogement.css";
import DropdownSmall from "../components/Dropdown/DropdownSmall.jsx";
import RatingStars from "../components/Stars/Stars.jsx"

function FicheLogement() {
    const [logementData, setLogementData] = useState(null);

    useEffect(() => {
        fetch("/Logement.json")
            .then(response => response.json())
            .then(data => setLogementData(data[0])) // Sélectionne le premier logement du tableau
            .catch(error => console.error("Erreur lors du chargement des données:", error));
    }, []);

    if (!logementData) {
        return <div>Chargement des données...</div>;
    }

    return (
        <div>
            <Navbar />
            <div className="fiche-logement">
                <img src={logementData.cover} alt="Cover" className="location-image" />
                <div className="Part_container">
                    <div className="Part_left">
                        <div className="Title-sub">
                            <h1 className="location-title">{logementData.title}</h1>
                            <span className="location-subtitle">{logementData.location}</span>
                        </div>
                        <div className="location_tags">
                            <ul className="tag-list">
                                {logementData.tags.map((tag, index) => (
                                    <li key={index}>{tag}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="Part_right">
                        <div className="host-info">
                            <div className="host-name">{logementData.host.name}</div>
                            <img src={logementData.host.picture} alt="Host" className="host-picture" />
                        </div>
                        <div className="location_rate">
                            <RatingStars rating={logementData.rating} />
                        </div>
                    </div>
                </div>
                <div className="drop-container">
                    <div className="location_description">
                        <DropdownSmall titre="Description" description={logementData.description} />
                    </div>
                    <div className="location_equipement">
                        <DropdownSmall titre="Équipements" description={logementData.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default FicheLogement;


