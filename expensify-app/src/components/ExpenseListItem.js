import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses.js';

const ExpenseListItem = ({id, description, amount, createdDate, dispatch}) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} at {createdDate}</p>
        <button onClick={
            () => {
                dispatch(removeExpense({id}));
            }
        }>
            remove
        </button>
    </div>
);

const mapStateToProps = (state) => ({
    expenses: state.expenses
});

export default connect(mapStateToProps)(ExpenseListItem);