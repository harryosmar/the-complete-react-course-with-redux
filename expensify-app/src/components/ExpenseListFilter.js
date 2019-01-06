import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters.js';

class ExpenseListFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calendarFocused: null,
        };
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onDatesFocusChange = (focusedInput) => {
        this.setState(() => ({ calendarFocused: focusedInput }) );
    };

    onSortByChange = (e) => {
        if (e.target.value === 'amount') {
            this.props.dispatch(sortByAmount(e.target.value));
        } else {
            this.props.dispatch(sortByDate(e.target.value));
        }
    };

    onTextFilterChange = (e) => {
        this.props.dispatch(setTextFilter(e.target.value));
    };

    render() {
        return (
            <div>
                <input value={this.props.filters.text} onChange={this.onTextFilterChange} />
                <select
                    value={this.props.filters.sortBy}
                    onChange={this.onSortByChange}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                    onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={this.onDatesFocusChange} // PropTypes.func.isRequired,
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilter);