import React, { useState } from "react";
import "./dropdownsmall.css";
import fleche from "../../assets/Vector.svg";

function DropdownSmall({titre, description}) {

    const [ouvert, setOuvert] = useState(false);

    return(
        <div className="dropdownsmall" id={`dropdown-${titre}`}>
            <div className="header-dropdownsmall">
                <div className="titre-dropdownsmall">{titre}</div>
                <span className={`fleche-dropdownsmall ${ouvert}`} onClick={() => setOuvert(!ouvert)}>
                    <img src={fleche} alt="Ouvrir cette liste"className="fleche-style2"/>
                </span>
            </div>
            {
                ouvert && <div className="description-dropdownsmall">{description}</div>
            }
        </div>
    );
}

export default DropdownSmall;