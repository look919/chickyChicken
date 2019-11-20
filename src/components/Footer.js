import React from 'react'
import {NavLink} from 'react-router-dom'

const Footer = () => (
    <footer className="footer">
        <div className="footer__company">
            <div>
            Logo
            </div>
            <div className="footer__info">
                <p>Moniuszki 6, 00-014 Warszawa</p>
                <p>Telefon: 653 234 125</p>
                <NavLink to="contactPage" className="footer__link"><p>Kontakt online</p></NavLink>
            </div>
        </div>
        <div className="footer__copyright">
            <p>&copy; Design of website inspired from www.szymiburger.pl, I do not claim any rights to it, code of my version is in 100% made by myself.</p>
        </div>        
    </footer>
)

export default Footer;

//<img src="/img/logo.png" alt="Logo" className="footer__logo" />
