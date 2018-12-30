import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
    <div>
        Expense List : { props.expenses.length }
        <p>{ props.filters.text }</p>
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