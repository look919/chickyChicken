import React from 'react'
import {CartIcon} from '../img/Icons';
import BoxOne from '../img/box-1.jpg'


const Menuitem = ({title, description, url, prize}) => (

    <div className="menu__item">
        <img src={url} className="menu__photo" alt="food photo"/>
        <div className="menu__info">
            <h4 className="heading-4">{title}</h4>
            <p className="menu__description">{description}</p>
        </div>
        <button className="btn menu__btn">
            <CartIcon/>
            {prize + 'zł'}
        </button>  
    </div>


)

export default Menuitem