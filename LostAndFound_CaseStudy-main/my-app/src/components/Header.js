import React from "react";
import logo from "../images/logo192.png";
export default function Header(){
return (
    <header className="Header">
        <nav className="nav">
            <img className="logo" src={logo}/>
            <h3>ReactFacts</h3>
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
)
}