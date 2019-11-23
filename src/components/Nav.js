import React from 'react';
import {NavLink} from 'react-router-dom';

import logo from '../img/logo.png'


const Nav = () => (
   <nav className="nav">
        <div className="nav__logo">
            <img src={logo} className="nav__logo"/>
        </div>
        <ul className="nav__list">
            <NavLink to='/' className="nav__item" activeClassName="isActive" exact={true}>Start</NavLink>
            <NavLink to='/menuPage' className="nav__item" activeClassName="isActive">Menu</NavLink>
            <NavLink to='/reservationPage' className="nav__item" activeClassName="isActive">Rezerwacja</NavLink>
            <NavLink to='/contactPage' className="nav__item" activeClassName="isActive">Kontakt</NavLink>
        </ul>        
    </nav>
);

export default Nav