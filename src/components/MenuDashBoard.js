import React from 'react'
import {Link} from 'react-router-dom'

const MenuDashboard = () => (
    <div className="menuDashboard">
        <div className="menuDashboard__title">
            <h3 className="heading-3 menuDashboard__title--1">Glodny? Zobacz</h3>
            <h3 className="heading-3 menuDashboard__title--2">Nasze menu</h3>
        </div>
        <div className="menuDashboard__items">
            <div className="menuDashboard__item">
                <div className="menuDashboard__item__flex">
                    <h4 className="heading-4">Kurczak Box nr 1</h4>
                    <h4 className="heading-4--red">11,95zł</h4>
                </div>
                <p className="menuDashboard__item__paragraph">
                    2 skrzydełka, 2 stripsy, 2 polędwiczki, frytki belgijskie, sałatka
                </p>
            </div>
            <div className="menuDashboard__item">
                <div className="menuDashboard__item__flex">
                    <h4 className="heading-4">Kurczak Box nr 3</h4>
                    <h4 className="heading-4--red">21,95zł</h4>
                </div>
                <p className="menuDashboard__item__paragraph">
                    5 stripsów, 5 polędwiczek, 2x frytki belgijskie, sałatka
                </p>
            </div>
            <div className="menuDashboard__item">
                <div className="menuDashboard__item__flex">
                    <h4 className="heading-4">Kurczak Box nr 5</h4>
                    <h4 className="heading-4--red">37,95zł</h4>
                </div>
                <p className="menuDashboard__item__paragraph">
                    10 skrzydełek, 5 stripsów, 5 polędwiczek, 2x frytki belgijskie, sałatka
                </p>
            </div>
            <div className="menuDashboard__item">
                <div className="menuDashboard__item__flex">
                    <h4 className="heading-4">Kurczak Burger</h4>
                    <h4 className="heading-4--red">13,95zł</h4>
                </div>
                <p className="menuDashboard__item__paragraph">
                    2 polędwiczki, pomidor, ogórek, sałata, cebula, ser żółty
                </p>
            </div>
            <div className="menuDashboard__item">
                <div className="menuDashboard__item__flex">
                    <h4 className="heading-4">Kurczitto Klasyczne</h4>
                    <h4 className="heading-4--red">13,95zł</h4>
                </div>
                <p className="menuDashboard__item__paragraph">
                    6 stripsów, ser żółty, kukurydza
                </p>
            </div>
            <div className="menuDashboard__item">
                <div className="menuDashboard__item__flex">
                    <h4 className="heading-4">Tortilla z Kurczakiem</h4>
                    <h4 className="heading-4--red">11,95zł</h4>
                </div>
                <p className="menuDashboard__item__paragraph">
                    3 stripsy, sałata, pomidor, ogórek, cebula
                </p>
            </div>
        </div>
        <Link to="/menuPage" className="btn menuDashboard__btn">Zobacz wszystko</Link>
    </div>
)

export default MenuDashboard;