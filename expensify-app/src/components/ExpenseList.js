import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem.js';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List :</h1>
        { props.expenses.map((expense, index) => <ExpenseListItem { ...expense } key={index}/>) }
    </div>
);

const mapStateToProps = (state) => (
    {
        expenses: state.expenses,
        filters: state.filters
    }
);

// higher order component
const hoc = connect(mapStateToProps);

export default hoc(ExpenseList);