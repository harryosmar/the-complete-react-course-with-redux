import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount/100).toString() : '',
            createdDate: props.expense ? moment(props.expense.createdDate) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }) );
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }) );
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }) );
        }
    };

    onDateChange = (createdDate) => {
        if (createdDate) {
            this.setState(() => ({ createdDate }) );
        }
    }

    onFocusChange = ( { focused } ) => {
        this.setState(() => ({ calendarFocused: focused }) );
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.amount || !this.state.description) {
            this.setState( () => ({ error: 'Please provide description and amount' }) );
        } else {
            this.setState( () => ({ error: '' }) );
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdDate: this.state.createdDate.valueOf(),
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="description"
                        autoFocus
                        onChange={this.onDescriptionChange}
                        value={this.state.description}
                        placeholder="Description"
                    />
                    <input
                        type="text"
                        name="amount"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdDate}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        name="note"
                        placeholder="Add a note for your expense (optional)"
                        onChange={this.onNoteChange}
                        value={this.state.note}
                    >
                    </textarea>
                    <button>Submit</button>
                </form>
            </div>
        );
    };
}