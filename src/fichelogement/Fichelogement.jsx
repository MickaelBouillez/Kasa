import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "./fichelogement.css";
import Erreur404 from "../404/404.jsx";
import Dropdown from "../components/Dropdown/Dropdown.jsx";
import RatingStars from "../components/Stars/Stars.jsx";
import SliderDisplay from "../components/SliderDisplay/SliderDisplay.jsx";

function FicheLogement() {
    const { id } = useParams(); // Récupérer l'identifiant du logement depuis l'URL
    const [logementData, setLogementData] = useState(null);

    useEffect(() => {
        fetch("/Logement.json")
            .then(response => response.json())
            .then(data => {
                // Filtrer les données pour trouver le logement correspondant à l'identifiant dans l'URL
                const selectedLogement = data.find(logement => logement.id === id);
                setLogementData(selectedLogement);
            })
            .catch(error => console.error("Erreur lors du chargement des données:", error));
    }, [id]); // Mettre à jour lorsque l'identifiant change dans l'URL

    if (!logementData) {
        return <Erreur404 />;
    }

    return (
        <div>
            <Navbar />
            <div className="fiche-logement">
                <SliderDisplay logementData={logementData} />
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
                            <RatingStars rating={logementData.rating} className="star" />
                        </div>
                    </div>
                </div>
                <div className="drop-container">
                    <div className="location_description">
                        <Dropdown titre="Description" description={logementData.description} />
                    </div>
                    <div className="location_equipement">
                        <Dropdown titre="Équipements" description={logementData.equipments.map((equipment, index) => (
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
