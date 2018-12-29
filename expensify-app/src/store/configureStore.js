import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses.js';
import filtersReducer from '../reducers/filters.js';

const store = () => (
    createStore(combineReducers
        ({
            expenses: expensesReducer,
            filters: filtersReducer
        })
    )
);

export default store;