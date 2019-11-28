import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Home, Phone, Clock } from '../img/Icons'


class ContactPage extends React.Component{
    

    


    render(){
        return(
            <div className="container--contact">
                <Nav />
                <div className="contact">
                    <div className="contact__info">
                        <div className="review">
                            <div className="review__circle">
                                <Phone />
                            </div>
                            <div className="review__info contact__info__title">Dane kontaktowe</div>
                            <p className="contact__info__paragraph">Telefon: 653 234 125</p>
                        </div>
                        <div className="review">
                            <div className="review__circle">
                                <Home />
                            </div>
                            <div className="review__info contact__info__title">Dane Adresowe</div>
                            <p className="contact__info__paragraph">ChickyChicken</p>
                            <p className="contact__info__paragraph">Moniuszki 6, 00-014 Warszawa</p>
                        </div>
                        <div className="review">
                            <div className="review__circle">
                                <Clock />
                            </div>
                            <div className="review__info contact__info__title">Godziny otwarcia</div>
                            <p className="contact__info__paragraph">Pn-Czw: 11:00 - 22:00</p>
                            <p className="contact__info__paragraph">Pt-Sob: 11:00 - 23:00</p>
                            <p className="contact__info__paragraph">Pt-Sob: 12:00 - 21:00</p>
                        </div>
                    </div>
                    
                    <div className="contact__form">
                        from
                    </div>
                </div>
                <Footer />
            </div>
        )
       
    }
}

export default ContactPage


