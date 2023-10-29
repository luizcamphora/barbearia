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
    this.props.onDateChange(date);
  };

  // Função para formatar a data como "Mês Dia"
  formatDate(date) {
    const options = { month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  }

  render() {
    const formattedDate = this.formatDate(this.state.date);

    return (
      <div className='calendario'>
        <Calendar onChange={this.onChange} value={this.state.date} className='calendario-customizacao' />
      </div>
    );
  }
}

export default MyCalendar;
