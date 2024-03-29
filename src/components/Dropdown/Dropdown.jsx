import React, { useState } from "react";
import "./dropdown.css";
import fleche from "../../assets/Vector.svg";

function Dropdown({titre, description}) {

    const [ouvert, setOuvert] = useState(false);

    return(
        <div className="dropdown" id={`dropdown-${titre}`}>
            <div className="header-dropdown">
                <div className="titre-dropdown">{titre}</div>
                <span className={`fleche-dropdown ${ouvert}`} onClick={() => setOuvert(!ouvert)}>
                    <img src={fleche} alt="Ouvrir cette liste"className="fleche-style"/>
                </span>
            </div>
            {
                ouvert && <div className="description-dropdown">{description}</div>
            }
        </div>
    );
}

export default Dropdown;