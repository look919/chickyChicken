import React from 'react'
import moment from 'moment'
import { isInclusivelyAfterDay, SingleDatePicker} from 'react-dates';

class Reservation extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            date: moment(),
            time: '15:00',
            calendarFocused: false,
            numOfPeople: 0,
            phone: '',
            email: '',
            name: '',
            description: '',     
            error: ''
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

    render(){
        return(
            <div className="reservation__form">
                {
                  this.props.title === "Wynajmij górne piętro" ?
                  <h2 className="heading-3 reservation__form__item--heading reservation__form__item--heading--red">{this.props.title}</h2> :
                  <h2 className="heading-3 reservation__form__item--heading">{this.props.title}</h2>
                }
                <div className="reservation__form__item reservation__form__item--date">
                  <label className="reservation__form__label reservation__form__label--center">Data</label>
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
                  <label className="reservation__form__label reservation__form__label--center reservation__form__label--time">Godzina</label>
                  <input 
                    type="time" min="10:00" max="22:00" 
                    value={this.state.time} onChange={this.onTimeChange}
                    className="reservation__form__time"
                    required
                  />    
                </div>
                <div className="reservation__form__item reservation__form__item--numOfPeople">
                  <label className="reservation__form__label">Liczba osób</label>
                  <input 
                    type="number" min="0" max="10" 
                    value={this.state.numOfPeople} onChange={this.onNumOfPeopleChange}
                    className="reservation__form__input" 
                  />
                </div>
                <div className="reservation__form__item reservation__form__item--phone">
                  <label className="reservation__form__label">Telefon</label>
                  <input 
                    type="tel" 
                    value={this.state.phone} onChange={this.onPhoneChange}
                    className="reservation__form__input"
                    required
                  />
                </div>
                <div className="reservation__form__item reservation__form__item--email">
                  <label className="reservation__form__label">Email</label>
                  <input 
                    type="email" 
                    value={this.state.email} onChange={this.onEmailChange}
                    className="reservation__form__input reservation__form--email"
                    required
                  />
                </div>
                <div className="reservation__form__item reservation__form__item--name">
                  <label className="reservation__form__label">Imię i nazwisko</label>
                  <input 
                    type="text" 
                    value={this.state.name} onChange={this.onNameChange}
                    className="reservation__form__input reservation__form--name"
                    required
                  />
                </div>
                <div className="reservation__form__item reservation__form__item--description">
                  <label className="reservation__form__label">Dodatkowe uwagi</label>               
                  <textarea
                    value={this.state.description} onChange={this.onDescriptionChange}
                    className="reservation__form__textarea reservation__form--description" 
                  />
                </div>
                <button className="btn reservation__form__btn">Wyślij</button>

            </div>
        )
       
    }
}

export default Reservation

