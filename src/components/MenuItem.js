import React from 'react'
import {CartIcon} from '../img/Icons';



const Menuitem = ({title, description, url, prize, id}) => {

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
        order.push({
            id,
            title,
            prize
        })
        localStorage.setItem('order', JSON.stringify(order))
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

const mapStateToProps = (state) => {
    return {
      menu: getMenu(state.menu)
    };
};

export default Menuitem