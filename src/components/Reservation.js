import React from 'react'
import moment from 'moment'
import { isInclusivelyAfterDay, SingleDatePicker} from 'react-dates';

class Reservation extends React.Component{
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    
        this.state = {
            date: moment(),
            time: '15:00',
            calendarFocused: false,
            numOfPeople: 1,
            phone: '',
            email: '',
            name: '',
            description: '',     
            info: ''
        };
      }
      
      onDateChange = (date) => {
        if (date) {
          this.setState(() => ({ date }));
        }
      };
      onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
      };
      onTimeChange = (e) => {
        const time = e.target.value
        this.setState(() => ({ time }));
      }
      onNumOfPeopleChange = (e) => {
        const numOfPeople = e.target.value
        this.setState(() => ({ numOfPeople }));
      }
      onPhoneChange = (e) => {
        const phone = e.target.value
        this.setState(() => ({ phone }));
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
        ev.preventDefault();
        
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
          date: moment(),
          time: '15:00',
          calendarFocused: false,
          numOfPeople: 1,
          phone: '',
          email: '',
          name: '',
          description: '',     
          info: 'Dziękujemy za złożenie rezerwacji!'
        }));
      } 
     

    render(){
        return(
            <form 
              onSubmit={this.submitForm}
              action="https://formspree.io/xkdayzkm"
              method="POST"
              className="reservation__form"                   
            >
                {
                  this.props.title === "Wynajmij górne piętro" ?
                  <h2 name="title" className="heading-3 reservation__form__item--heading reservation__form__item--heading--red">{this.props.title}</h2> :
                  <h2 name="title" className="heading-3 reservation__form__item--heading">{this.props.title}</h2>
                }
                <div className="reservation__form__item reservation__form__item--date">
                  <label className="reservation__form__label reservation__form__label--center">Data *</label>
                  <div className="reservation__form--date">
                    <SingleDatePicker
                      date={this.state.date}
                      onDateChange={this.onDateChange}
                      focused={this.state.calendarFocused}
                      onFocusChange={this.onFocusChange}
                      numberOfMonths={1}
                      isOutsideRange={day => !isInclusivelyAfterDay(day, moment())}   
                      required 
                    />
                  </div>
                </div>
                <div className="reservation__form__item reservation__form__item--time">
                  <label className="reservation__form__label reservation__form__label--center reservation__form__label--time">Godzina *</label>
                  <input 
                    type="time" min="12:00" max="20:00" 
                    value={this.state.time} onChange={this.onTimeChange}
                    className="reservation__form__time"
                    required
                    name="time"
                  />    
                </div>
                {
                  this.props.title === "Wynajmij górne piętro" ?
                  <div className="reservation__form__item reservation__form__item--numOfPeople">
                    <label className="reservation__form__label">Liczba osób</label>
                    <input 
                      type="number" min="1" max="50" 
                      value={this.state.numOfPeople} onChange={this.onNumOfPeopleChange}
                      className="reservation__form__input"
                      name="numOfPeople"
                    />
                  </div> :
                  <div className="reservation__form__item reservation__form__item--numOfPeople">
                    <label className="reservation__form__label">Liczba osób</label>
                    <input 
                      type="number" min="1" max="6" 
                      value={this.state.numOfPeople} onChange={this.onNumOfPeopleChange}
                      className="reservation__form__input"
                      name="numOfPeople"
                    />
                  </div>
                }
                
                <div className="reservation__form__item reservation__form__item--phone">
                  <label className="reservation__form__label">Telefon *</label>
                  <input 
                    type="tel" 
                    value={this.state.phone} onChange={this.onPhoneChange}
                    className="reservation__form__input"
                    required
                    name="phone"
                  />
                </div>
                <div className="reservation__form__item reservation__form__item--email">
                  <label className="reservation__form__label">Email *</label>
                  <input 
                    type="email" 
                    value={this.state.email} onChange={this.onEmailChange}
                    className="reservation__form__input reservation__form--email"
                    required
                    name="email"
                  />
                </div>
                <div className="reservation__form__item reservation__form__item--name">
                  <label className="reservation__form__label">Imię i nazwisko *</label>
                  <input 
                    type="text" 
                    value={this.state.name} onChange={this.onNameChange}
                    className="reservation__form__input reservation__form--name"
                    required
                    name="name"
                  />
                </div>
                <div className="reservation__form__item reservation__form__item--description">
                  <label className="reservation__form__label">Dodatkowe uwagi</label>               
                  <textarea
                    value={this.state.description} onChange={this.onDescriptionChange}
                    className="reservation__form__textarea reservation__form--description" 
                    name="message"
                  />
                </div>
                
                {
                  !!this.state.info ? 
                  <button className="btn reservation__form__btn reservation__form__btn--animated">Dziękujemy za złożenie rezerwacji!</button> :
                  <button className="btn reservation__form__btn">Wyślij</button>
                }
            </form>
        )
       
    }  
     

}

export default Reservation

