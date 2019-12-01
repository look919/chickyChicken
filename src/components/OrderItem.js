import React from 'react'
import {X} from '../img/Icons'



const OrderItem = ({title, prize, id}) => {
    const deleteItem = (id) => {
        const getData = localStorage.getItem('order')
        const order = getData ? JSON.parse(getData) : []
        const updatedOrder = order.filter((item) => item.id !== id)
        
        localStorage.setItem('order', JSON.stringify(updatedOrder))  
    }

    return (
        <div className="order__item">
            <p className="order__item__title">{title}</p>
            <div className="order__item__prize">
                <p>{prize + 'zł'}</p>
                <button className="order__item__btn" onClick={() => deleteItem(id)}> <X /> </button>
            </div>
        </div>
    )
}


export default OrderItem