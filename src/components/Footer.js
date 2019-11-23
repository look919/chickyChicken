import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/logo.png'

const Footer = () => (
    <footer className="footer">
        <div className="footer__company">
            <div>
                <img src={logo} alt="Logo" className="footer__logo" />
            </div>
            <div className="footer__info">
                <p>Moniuszki 6, 00-014 Warszawa</p>
                <p>Telefon: 653 234 125</p>
                <Link to="contactPage" className="btn-inline"><p>Kontakt online</p></Link>
            </div>
        </div>
        <div className="footer__copyright">
            <p>&copy; Design of website inspired from www.szymiburger.pl, I do not claim any rights to it, code of my version is in 100% made by myself.</p>
        </div>        
    </footer>
)

export default Footer;

