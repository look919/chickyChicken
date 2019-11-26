import React from 'react'
import moment from 'moment'
import { isInclusivelyAfterDay, SingleDatePicker} from 'react-dates';


class TableReserv extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            date: moment(),
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
            </div>
        )
       
    }
}

export default TableReserv


