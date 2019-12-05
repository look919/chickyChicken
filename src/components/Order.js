import React from 'react'
import database from '../firebase/firebase';
import Recaptcha from 'react-recaptcha'

import OrderItem from '../components/OrderItem'
import uuid from 'react-uuid'


class Order extends React.Component{
    constructor(props) {
        super(props);
        this.onloadCallback = this.onloadCallback.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);

        const getData = localStorage.getItem('order')
        const order = getData ? JSON.parse(getData) : []
        let prize = 0
        order.forEach((el)=> {
            prize += el.prize
        })

        this.state = {
            order: order,
            prize: prize,
            sauceOne: '',
            sauceTwo: '',
            sendState: false,
            isVeryfied: false
        };
    }
    onloadCallback = () => {
        console.log('captcha sucessfully loaded')
    }
    verifyCallback = (response) => {
        if(response){
            this.setState(() => ({
                isVeryfied: true
            }))
        }
    }
    componentDidMount(){
        setInterval(this.updateOrder, 350)   
    }

    onChangeSauceOne = (e) => {
        const sauceOne = e.target.value
        this.setState(()=> ({ sauceOne }))
    }
    onChangeSauceTwo = (e) => {
        const sauceTwo = e.target.value
        this.setState(()=> ({ sauceTwo }))
    }


    updateOrder = () => {
        if(this.refs.order){
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

            if(this.state.prize < 10){
                this.setState(() => ({
                    sauceOne: '',
                    sauceTwo: ''
                }))
            }
        }     
    }
    
    addOrder = () => {
        if(this.state.isVeryfied){
            const getData = localStorage.getItem('order')
            const order = getData ? JSON.parse(getData) : []
            let prize = 0
            let orderDataBase = []
    
            order.forEach((el)=> {
                prize += el.prize
                orderDataBase.push(el.title)
            })
            orderDataBase.push(this.state.sauceOne)
            orderDataBase.push(this.state.sauceTwo)
            orderDataBase.push(prize.toFixed(2))
            
    
            database.ref('order').push(orderDataBase)
            localStorage.removeItem('order')
    
    
            this.setState(() => ({
                sendState: true
            }))
        }
        
    }

    reload = () => {
        this.setState(()=> ({
            sendState: false
        }))
    }


    render(){
        return (
            <div className="order" ref="order" id="order">
                <div className="order__header">
                    <h3 className="heading-3 order__header__heading-3">Oto Twoje zamowienie</h3>
                    <p className="order__header__sauces">Do każdego zamówienia powyżej 10zł 2 sosy gratis, sprawdz czy wszystko się zgadza</p>
                </div> 
                <div className="order__items">
                    <div className="order__items__order">            
                        {
                            this.state.order.map((el) => (
                                <OrderItem key={uuid()} {...el}/>
                            ))
                        }
                    </div>
                    <div className="order__items__sauces">                       
                        {
                            this.state.prize >= 10 ? 
                            <div className="order__items__sauces">
                                <select className="order__items__sauces__select" onChange={this.onChangeSauceOne}>
                                    <option value="none">---</option>  
                                    <option value="Ketchup">Ketchup</option>
                                    <option value="Musztarda">Musztarda</option>
                                    <option value="Sos serowy">Sos serowy</option>
                                    <option value="Sos BBQ">Sos BBQ</option>
                                    <option value="Sos słodkie chilli">Sos słodkie chilli</option>
                                    <option value="Sos arabski">Sos arabski</option>
                                    <option value="Tzatzyki">Tzatzyki</option>
                                    <option value="Sos słodko-kwaśny">Sos słodko-kwaśny</option>
                                </select>
                                <select className="order__items__sauces__select" onChange={this.onChangeSauceTwo}>
                                    <option value="none">---</option>  
                                    <option value="Ketchup">Ketchup</option>
                                    <option value="Musztarda">Musztarda</option>
                                    <option value="Sos serowy">Sos serowy</option>
                                    <option value="Sos BBQ">Sos BBQ</option>
                                    <option value="Sos słodkie chilli">Sos słodkie chilli</option>
                                    <option value="Sos arabski">Sos arabski</option>
                                    <option value="Tzatzyki">Tzatzyki</option>
                                    <option value="Sos słodko-kwaśny">Sos słodko-kwaśny</option>
                                </select>
                            </div> : <div></div>
                        } 
                        {
                            this.state.prize > 0 ? 
                            <div className="order__items__summary">
                                <p className="order__items__paragraph">Razem: {this.state.prize.toFixed(2) + 'zł'}</p>
                                <p className="order__items__paragraph order__items__paragraph--italic">Płatność przy odbiorze w restauracji</p>
                            </div> : <div></div>                       
                        }                
                    </div>         
                </div>            
         
                <div className="order__submit">
                        <Recaptcha
                            sitekey="6LdYLcMUAAAAANx2tsT3MKgIczb4X3G5SHHF47EJ"
                            render="explicit"
                            verifyCallback={this.verifyCallback}
                            onloadCallback={this.onloadCallback}
                        />            
                    {
                        !this.state.sendState ?
                        <button className="btn order__submit__btn" onClick={this.addOrder}>Zamów</button> :
                        <button className="btn order__submit__btn--animated" onClick={this.reload}>Dziekujemy za zamówienie!</button>
                    }
                </div>
            </div>
        )
    }
}

export default Order