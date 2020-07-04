import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo-big.png';
import facebook from '../../images/social-media/facebook.png';
import instagram from '../../images/social-media/instagram.png';
import whatsapp from '../../images/social-media/whatsapp.png';
import tripadvisor from '../../images/social-media/tripadvisor.png';

function Footer () {
    return(
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="presentation">
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>

                        <p>Descubra, pedalando em tours guiados, paisagens incríveis, locais históricos e novas sensações.</p>
                    </div>

                    <div className="menu">
                        <h4>Menu</h4>

                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/roteiros">Roteiros</Link>
                            </li>
                            <li>
                                <Link to="/clube">VIPs</Link>
                            </li>
                            <li>
                                <Link to="/sobre">Sobre</Link>
                            </li>
                            <li>
                                <Link to="/contato">Contato</Link>
                            </li>
                            <li>
                                <a href="https://www.poptour.top/" target="_blank">Pop Tour</a>
                            </li>
                        </ul>
                    </div>

                    <div className="social-media">
                        <h4>Redes Sociais</h4>

                        <div className="social-media-icons">
                            <a href="https://www.facebook.com/biketourpoa" target="_blank"><img src={facebook} alt="Facebook" /></a>
                            <a href="" target="_blank"><img src={instagram} alt="Instagram" /></a>
                            <a href="tel:5551998424013"><img src={whatsapp} alt="WhatsApp" /></a>
                            <a href="https://www.tripadvisor.com.br/Attraction_Review-d12226663.html" target="_blank"><img src={tripadvisor} alt="Tripadvisor" /></a>
                        </div>
                    </div>
                </div>
                
                <div className="copyright">
                    <Link to="/">Bike Tour Poa</Link> &copy; 2020
                </div>
            </div>
        </footer>
    );
}

export default Footer;