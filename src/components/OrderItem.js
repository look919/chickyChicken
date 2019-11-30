import React from 'react'
import {X} from '../img/Icons'

const Orderitem = ({title, prize}) => (
    <div className="order__item">
        <p className="order__item__title">{title}</p>
        <div className="order__item__prize">
            <p>{prize + 'zł'}</p>
            <button className="order__item__btn"> <X /> </button>
        </div>
    </div>
)

export default Orderitem