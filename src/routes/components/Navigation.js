import React from 'react';

import logo from '../../images/logo-transparent.png';
import { Link } from 'react-router-dom';


/**
 * Behaviors
 */
function openMenu() {
    //Change nav style
    document.getElementById("navigation").classList.toggle("active");
    //Show/hide menu
    document.querySelector(".nav-links").classList.toggle("show");
}


/**
 * Components
 */
function Navigation () {

    return(
        <nav id="navigation">
            <div className="container">
                <Link to="/" id="logo"><img src={logo} alt="Logo Bike Tour Poa"/></Link>

                <button className="nav-bar-toggler" onClick={openMenu}>
                    <div id="burger-icon">
                        <div className="bar bar1"></div>
                        <div className="bar bar2"></div>
                        <div className="bar bar3"></div>
                    </div>
                </button>

                <div className="nav-links">
                    <ul>
                        <li className="nav-item">
                            <Link to="/" onClick={openMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/roteiros" onClick={openMenu}>Roteiros</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/clube" onClick={openMenu}>VIPs</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sobre" onClick={openMenu}>Sobre</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contato" onClick={openMenu}>Contato</Link>
                        </li>
                        <li className="nav-item special">
                            <a href="https://www.poptour.top/" target="_blank" onClick={openMenu}>Pop Tour</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;