// Em MyCalendar.js

import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MyCalendar.css';


class MyCalendar extends Component {
  state = {
    date: new Date(),
  };

  onChange = (date) => {
    this.setState({ date });
    // Chame a função de manipulador quando a data for alterada
    this.props.onDateChange(date);
  };

  render() {
    return (
      <div className='calendario'>
        <Calendar onChange={this.onChange} value={this.state.date} className='calendario-customizacao' />
      </div>
    );
  }
}

export default MyCalendar;
