import React from 'react'
import {CartIcon} from '../img/Icons';
import uuid from 'react-uuid'




const Menuitem = ({title, description, url, prize, id}) => {
  
    let orderLength = 0;

    const loadOrder = () => {
        const getOrder = localStorage.getItem('order')
        try {
            return getOrder ? JSON.parse(getOrder) : []
         } catch (e) {
             return []
         }
    }
    const addToOrder = () => {
        let order = loadOrder() 

        if(order.length <10) {
            order.push({
                id: uuid(),
                title,
                prize
            })
            localStorage.setItem('order', JSON.stringify(order))
        }      
    }


  

    return (
        <div className="menu__item">
            <img src={url} className="menu__photo" alt="food photo"/>
            <div className="menu__info">
                <h4 className="heading-4">{title}</h4>
                <p className="menu__description">{description}</p>
            </div>
            <button className="btn menu__btn" onClick={addToOrder}>
                <CartIcon/>
                {prize + 'zł'}
            </button> 
            
        </div>
    )
}


export default Menuitem