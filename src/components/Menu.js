import React from 'react'
import { NavLink } from 'react-router-dom';
import {CartIcon} from '../img/Icons';
import BoxOne from '../img/box-1.jpg'

class Menu extends React.Component{


    render(){
        return (
            <div className="menu">
                <div className="menu__nav">
                    <ul className="menu__navlist">
                        <NavLink to="#boxes" className="heading-3 menu__navitem">Boxy</NavLink>
                        <NavLink to="#others" className="heading-3 menu__navitem">Dania z kurczakiem</NavLink>
                        <NavLink to="#snatches" className="heading-3 menu__navitem">Przekaski</NavLink>
                        <NavLink to="#drinks" className="heading-3 menu__navitem">Napoje</NavLink>
                    </ul>          
                </div>
                <div className="menu__item">
                    <img src={BoxOne} className="menu__photo" alt="food photo"/>
                    <div className="menu__info">
                        <h4 className="heading-4">Kurczak Box nr 1</h4>
                        <p className="menu__description">2 skrzydełka, 2 stripsy, 2 polędwiczki, frytki belgijskie, sałatka</p>
                    </div>
                    <button className="btn menu__btn">
                        <CartIcon/>
                        11,95zł
                    </button>  
                </div>
                <div className="menu__item">
                    <img src={BoxOne} className="menu__photo" alt="food photo"/>
                    <div className="menu__info">
                        <h4 className="heading-4">Kurczak Box nr 2</h4>
                        <p className="menu__description">3 stripsy, 3 polędwiczki, frytki belgijskie, sałatka</p>
                    </div>
                    <button className="btn menu__btn">
                        <CartIcon/>
                        13,95zł
                    </button>  
                </div>
                <div className="menu__item">
                    <img src={BoxOne} className="menu__photo" alt="food photo"/>
                    <div className="menu__info">
                        <h4 className="heading-4">Kurczak Box nr 3</h4>
                        <p className="menu__description">5 stripsów, 5 polędwiczek, 2x frytki belgijskie, sałatka</p>
                    </div>    
                    <button className="btn menu__btn">
                        <CartIcon/>
                        21,95zł
                    </button>   
                </div>
                <div className="menu__item">
                    <img src={BoxOne} className="menu__photo" alt="food photo"/>
                    <div className="menu__info">
                        <h4 className="heading-4">Kurczak Box nr 4</h4>
                        <p className="menu__description">10 skrzydełek, 5 stripsów, 2x frytki belgijskie, 2x sałatka</p>
                    </div>    
                    <button className="btn menu__btn">
                        <CartIcon/>
                        29,95zł
                    </button>   
                </div>
                <div className="menu__item">
                    <img src={BoxOne} className="menu__photo" alt="food photo"/>
                    <div className="menu__info">
                        <h4 className="heading-4">Kurczak Box nr 5</h4>
                        <p className="menu__description">10 skrzydełek, 5 stripsów, 5 polędwiczek, 2x frytki belgijskie, sałatka</p>
                    </div>    
                    <button className="btn menu__btn">
                        <CartIcon/>
                        37,95zł
                    </button>   
                </div>
                <div className="menu__item">
                    <img src={BoxOne} className="menu__photo" alt="food photo"/>
                    <div className="menu__info">
                        <h4 className="heading-4">Kurczak Box nr 6</h4>
                        <p className="menu__description">30 skrzydełek, 2xfrytki belgijskie, 2x sałatka</p>
                    </div>    
                    <button className="btn menu__btn">
                        <CartIcon/>
                        45,95zł
                    </button>   
                </div>
            </div>

        )
    }
}

export default Menu