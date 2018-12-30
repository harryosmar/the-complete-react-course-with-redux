import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

// REDUCER
const expensesReducer = (prevState = [], action) => {
    switch (action.type) {
        default:
            return prevState;
    }
};
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (prevState = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return prevState;
    }
};

// REDUX STORE, COMBINE REDUCER
const store = createStore(combineReducers
    ({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

// REACT COMPONENT
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

// HOC/higher order component created
const hoc = connect(mapStateToProps);

// MODIFIED REACT COMPONENT create new ExpenseList component which have access to redux store/state. The redux state mapped to ExpenseList props
const NewExpenseList = hoc(ExpenseList);

// Use reac-redux Provider, to delegate redux store/state
const jsx = (
    <Provider store={ store }>
        <NewExpenseList />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('placedhere'));