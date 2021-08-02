import React from 'react';
import {Link} from "react-router-dom"
import "./Home.css";

export default function GeneralHome() {
    return (
        <div className="home_container">
            <div className="home_description">
                <p>avez-vous <span className="highlited_text">des connaissances </span>que voulez partager avec les autres ? </p>
                <p>Voulez vous en profiter pour gagner de <span className="highlited_text">l'argent</span>?</p>
                <p>êtes-vous à la recherche de <span className="highlited_text">soutien</span> pour réussir vos cours?</p>
                <p>vous êtes tous dans le bon endroit, chez <span className="highlited_text">Teachme</span></p>
                <div className="home_button_container">
                    <Link to="/signup"><button className="home_button">S'enregistrer</button></Link>
                    <Link to="/signin" ><button className="home_button home_register_button">se connecter</button></Link>
                </div>
            </div>
        </div>
    )
}
