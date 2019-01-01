import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem.js';
import { getVisibleExpenses } from '../selectors/expenses.js';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List :</h1>
        { props.expenses.map(expense => (
            <ExpenseListItem
                { ...expense }
                key={expense.id}
            />
        )) }
    </div>
);

const mapStateToProps = (state) => (
    {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
);

// higher order component
const hoc = connect(mapStateToProps);

export default hoc(ExpenseList);