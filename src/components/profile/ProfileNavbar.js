import React from 'react'
import './ProfileNavbar.css'
import {NavLink } from "react-router-dom"
export default function ProfileNavBar() {
    return (
        <div style={{display:"flex",width:"80vw",height:"6vh",borderRadius:"50px",margin:"10px",border:"3px solid #f29263",justifyContent:"space-between",padding:10}} >
            {/* <ul className="navbar-nav ml-auto"> 
                <li className="nav-item active">
                <NavLink className="nav-link" to="/contact" exact>
                    <i 
                    className="fas fa-tachometer-alt">
                    </i>accueil
                </NavLink>
                </li>

                <li className="nav-item">
                <NavLink className="nav-link" to="/contact" exact>
                    <i 
                    className="far fa-copy">
                    </i>nous contacter
                </NavLink>
                </li>
        </ul> */}
        <button> faire une offre </button>
        <button> historique des offres</button>
        </div>
    )
}
