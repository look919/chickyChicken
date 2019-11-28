import React from 'react'
import moment from 'moment'
import { isInclusivelyAfterDay, SingleDatePicker} from 'react-dates';
// import TimePicker from 'react-time-picker';

class TableReserv extends React.Component{
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
          console.log(moment())
        }
      };
      onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
      };
      onTimeChange = ({time}) => {
        this.setState(() => ({ time: time }));
        console.log(typeof(time))
      }

    render(){
        return(
            <div className="reservation__tableReserv">
                <h2 className="heading-2">Zarezerwuj stolik</h2>
                <SingleDatePicker
                  date={this.state.date}
                  onDateChange={this.onDateChange}
                  focused={this.state.calendarFocused}
                  onFocusChange={this.onFocusChange}
                  numberOfMonths={1}
                  isOutsideRange={day => !isInclusivelyAfterDay(day, moment())}
                />
                <input 
                  type="time" min="10:00" max="22:00" 
                  value={this.state.time} onChange={this.onTimeChange}
                  className="reservation__time" 
                />

            </div>
        )
       
    }
}

export default TableReserv


// <TimePicker
                //   onChange={this.onTimeChange}
                //   value={this.state.time}
                //   disableClock={true}
                //   className="clock"
                // />