import React from 'react';
import {NavLink} from 'react-router-dom'

export const Header = () => (
  <div className="header">
      <h1 className="heading-1 header__title--1">U nas zjesz</h1>
      <h1 className="heading-1 header__title--2">Najlepsze kurczaki!</h1>
      <p className="header__paragraph">Podajemy zawsze świeżo i dobrze bo naszą ideą jest jakość i zadowolenie naszych klientów</p>
      <p className="header__paragraph">Smażymy siedem dni w tygodniu, wyczekuj promocji</p>
      <NavLink to="/menuPage"><button className="btn header__btn">Zobacz Menu</button></NavLink>
  </div>
);

export default Header;