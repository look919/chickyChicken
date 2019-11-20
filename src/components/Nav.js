import React from 'react';
import {NavLink} from 'react-router-dom';

import logo from '../img/logo.png';

const Nav = () => (
   <nav className="nav">
        <div className="nav__logo">
            <img src={require('../img/logo.png')} className="nav__logo"/>
        </div>
        <ul className="nav__list">
            <NavLink to='/' className="nav__item">Start</NavLink>
            <NavLink to='/menuPage' className="nav__item">Menu</NavLink>
            <NavLink to='/reservationPage' className="nav__item">Rezerwacja</NavLink>
            <NavLink to='/contactPage' className="nav__item">Kontakt</NavLink>
        </ul>        
    </nav>
);

export default Nav