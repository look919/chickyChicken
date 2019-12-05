import React from 'react'
import moment from 'moment';

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Home, Phone, Clock } from '../img/Icons'


class ContactPage extends React.Component{
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        
        this.state = {
            day: new moment().format('dddd'),
            email: '',
            name: '',
            description: '',     
            info: ''
        };
    }

    componentDidMount() {
        this.interval = setInterval(this.updateDay, 3000);
    }

    onEmailChange = (e) => {
        const email = e.target.value
        this.setState(() => ({ email }));
    }
    onNameChange = (e) => {
    const name = e.target.value
    this.setState(() => ({ name }));
    }
    onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({ description }));
    }
    
    submitForm(ev) {
        ev.preventDefault()

        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
          } else {
            this.setState({ info: "Przepraszamy, chwilowa usterka" });
          }
        };
        //xhr.send(data)
            
        this.setState(() => ({
            day: moment().format('dddd'),
            email: '',
            name: '',
            description: '',      
            info: 'Dziękujemy za wiadomość!'
        }));       
    }
    updateDay = () => {
        if(this.refs.first || this.refs.second || this.refs.third){
            this.setState(() => ({ day: moment().format('dddd')}))
        }
    }
    render(){
        return(
            <div className="container--contact">
                <Nav />
                <div className="contact">
                    <div className="contact__info">
                        <div className="review">
                            <div className="review__circle contact__info__circle">
                                <Phone />
                            </div>
                            <div className="review__info contact__info__title">Dane kontaktowe</div>
                            <p className="contact__info__paragraph">Telefon: 653 234 125</p>
                            <p className="contact__info__paragraph">Email: ChickyChicken@gmail.com</p>

                        </div>
                        <div className="review">
                            <div className="review__circle contact__info__circle">
                                <Home />
                            </div>
                            <div className="review__info contact__info__title">Dane Adresowe</div>
                            <p className="contact__info__paragraph">ChickyChicken</p>
                            <p className="contact__info__paragraph">Moniuszki 6, 00-014 Warszawa</p>
                        </div>
                        <div className="review">
                            <div className="review__circle contact__info__circle">
                                <Clock />
                            </div>
                            <div className="review__info contact__info__title">Godziny otwarcia</div>
                            {
                                (this.state.day !== 'Friday' && this.state.day !=='Saturday' && this.state.day !== 'Sunday') ?
                                <p className="contact__info__paragraph contact__info__paragraph--animated" ref="first">Pn-Czw: 11:00 - 22:00</p> :
                                <p className="contact__info__paragraph">Pn-Czw: 11:00 - 22:00</p>
                            }
                            {
                                (this.state.day === 'Friday' || this.state.day === 'Saturday') ?
                                <p className="contact__info__paragraph contact__info__paragraph--animated " ref="second">Pt-Sob: 11:00 - 23:00</p> :
                                <p className="contact__info__paragraph">Pt-Sob: 11:00 - 23:00</p>
                            }
                            {
                                (this.state.day === 'Sunday') ?
                                <p className="contact__info__paragraph contact__info__paragraph--animated" ref="third">Niedz: 12:00 - 21:00</p> :
                                <p className="contact__info__paragraph">Niedz: 12:00 - 21:00</p>
                            }
                        </div>
                    </div>
                    
                    <div className="contact__form">
                        <h3 className="heading-2--red contact__form__title">Masz jakieś pytania?</h3>
                        <h4 className="heading-4 contact__form__subtitle">Zostaw wiadomość, odpowiemy w przieciągu dwóch dni</h4>
                        <form
                            onSubmit={this.submitForm}
                            action="https://formspree.io/xkdayzkm"
                            method="POST"
                            className="reservation__form contact__form"  
                        >
                            <div className="reservation__form__item reservation__form__item--email">
                                <label className="reservation__form__label contact__form__label">Email *</label>
                                <input 
                                type="email" 
                                value={this.state.email} onChange={this.onEmailChange}
                                className="reservation__form__input reservation__form--email contact__form__input"
                                required
                                name="email"
                                />
                            </div>
                            <div className="reservation__form__item reservation__form__item--name">
                                <label className="reservation__form__label contact__form__label">Imię i nazwisko</label>
                                <input 
                                type="text" 
                                value={this.state.name} onChange={this.onNameChange}
                                className="reservation__form__input reservation__form--name contact__form__input"
                                name="name"
                                />
                            </div>
                            <div className="reservation__form__item reservation__form__item--description">
                                <label className="reservation__form__label contact__form__label">Wiadomość *</label>               
                                <textarea
                                required
                                value={this.state.description} onChange={this.onDescriptionChange}
                                className="reservation__form__textarea reservation__form--description contact__form__textarea" 
                                name="description"                       
                                />
                            </div> 
                            {
                                !!this.state.info ? 
                                <button className="btn reservation__form__btn reservation__form__btn--animated">Dziękujemy za wiadomość!</button> :
                                <button className="btn reservation__form__btn contact__form__btn">Wyślij</button>
                            }                                          
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        )
       
    }
}

export default ContactPage


