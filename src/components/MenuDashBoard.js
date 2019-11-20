import React from 'react'
import {NavLink} from 'react-router-dom'

const MenuDashBoard = () => (
    <div className="menu">
        <div className="menu__title">
            <h3 className="heading-3 menu__title--1">Glodny? Zobacz</h3>
            <h3 className="heading-3 menu__title--2">Nasze menu</h3>
        </div>
        <div className="menu__items">
            <div className="menu__item">
                <div className="menu__item__flex">
                    <h4 className="heading-4">Kurczak Box nr 1</h4>
                    <h4 className="heading-4--red">15,95zł</h4>
                </div>
                <p className="menu__item__paragraph">
                    2 skrzydełka, 2 stripsy, 2 polędwiczki, frytki belgijskie, sałatka, 2 sosy do wyboru
                </p>
            </div>
            <div className="menu__item">
                <div className="menu__item__flex">
                    <h4 className="heading-4">Kurczak Box nr 3</h4>
                    <h4 className="heading-4--red">25,95zł</h4>
                </div>
                <p className="menu__item__paragraph">
                    5 stripsów, 5 polędwiczek, 2x frytki belgijskie, sałatka, 2 sosy do wyboru
                </p>
            </div>
            <div className="menu__item">
                <div className="menu__item__flex">
                    <h4 className="heading-4">Kurczak Box nr 5</h4>
                    <h4 className="heading-4--red">42,95zł</h4>
                </div>
                <p className="menu__item__paragraph">
                    10 skrzydełek, 5 stripsów, 5 polędwiczek, 2x frytki belgijskie, sałatka, 2 sosy do wyboru
                </p>
            </div>
            <div className="menu__item">
                <div className="menu__item__flex">
                    <h4 className="heading-4">Kurczak Burger</h4>
                    <h4 className="heading-4--red">15,95zł</h4>
                </div>
                <p className="menu__item__paragraph">
                    2 polędwiczki, pomidor, ogórek, sałata, cebula, ser żółty, 2 sosy
                </p>
            </div>
            <div className="menu__item">
                <div className="menu__item__flex">
                    <h4 className="heading-4">Kurczitto Klasyczne</h4>
                    <h4 className="heading-4--red">15,95zł</h4>
                </div>
                <p className="menu__item__paragraph">
                    6 stripsów, ser żółty, kukurydza, 2 sosy
                </p>
            </div>
            <div className="menu__item">
                <div className="menu__item__flex">
                    <h4 className="heading-4">Tortilla z Kurczakiem</h4>
                    <h4 className="heading-4--red">13,95zł</h4>
                </div>
                <p className="menu__item__paragraph">
                    3 stripsy, sałata, pomidor, ogórek, cebula, 2 sosy
                </p>
            </div>
        </div>
        <NavLink to="/menuPage" className="btn">Zobacz wszystko</NavLink>
    </div>
)

export default MenuDashBoard;