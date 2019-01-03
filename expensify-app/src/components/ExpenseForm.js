import React from 'react';

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: ''
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        e.persist();
        this.setState(() => ({ description : e.target.value}) );
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }) );
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }) );
        }
    }

    render() {
        return (
            <div>
                <form>
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
                    <textarea
                        name="note"
                        placeholder="Add a note for your expense (optional)"
                        onChange={this.onNoteChange}
                        value={this.state.note}
                    >
                    </textarea>
                </form>
            </div>
        );
    };
}