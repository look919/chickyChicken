import React from 'react'
import OrderItem from '../components/OrderItem'
import uuid from 'react-uuid'


class Order extends React.Component{
    constructor(props) {
        super(props);

        const getData = localStorage.getItem('order')
        const order = getData ? JSON.parse(getData) : []
        let prize = 0
        order.forEach((el)=> {
            prize += el.prize
        })

        this.state = {
            order: order,
            prize: prize
        };
    }

    componentDidMount() {
        this.interval = setInterval(this.updateOrder, 100);
    }
    updateOrder = () => {
        const getData = localStorage.getItem('order')
        const order = getData ? JSON.parse(getData) : []
        let prize = 0
        order.forEach((el)=> {
            prize += el.prize
        })

        this.setState(() => ({
            order: order,
            prize: prize
        }))
    }

    render(){
        
        return (
            <div className="order">
                <div className="order__header">
                    <h3 className="heading-3 order__header__heading-3">Oto Twoje zamowienie</h3>
                    <p className="order__header__sub-heading">Sprawdz czy wszystko się zgadza</p>
                </div> 
                <div className="order__items">
                    {
                        this.state.order.map((el) => (
                            <OrderItem key={uuid()} {...el}/>
                        ))
                    }
                </div>
                <div className="order__paragraphs">
                    <p className="order__paragraph">Razem: {this.state.prize + 'zł'}</p>
                    <p className="order__paragraph order__paragraph--italic">Płatność przy odbiorze w restauracji</p>
                </div>           
                
                <div className="order__submit">
                    
                    <button className="btn order__submit__btn">Zamów</button>
                </div>
            </div>
        )
    }
}

export default Order