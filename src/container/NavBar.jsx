import React from 'react';
import "./NavBar.css";
import logo from "../logo1.png";

function NavBar() {
    return (
        <div className="nav">
            <img className="NavLogo" src={logo}/>
        </div>
    )
}

export default NavBar
