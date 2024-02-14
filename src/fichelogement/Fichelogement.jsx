import React from "react";
import "./fichelogement.css";
import Navbar from "../components/Navbar/Navbar.jsx"
import Footer from "../components/Footer/Footer.jsx"

function FicheLogement() {
    return(
        <div>
        <Navbar />
        <div className="fiche-logement">
        </div>
        <Footer/>
        </div>
    );
}

export default FicheLogement;