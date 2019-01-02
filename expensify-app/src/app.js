import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore.js';
import { addExpense, removeExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import { getVisibleExpenses } from './selectors/expenses';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const expense1 = store.dispatch(addExpense({description: 'Water Bill', amount: 4500}));
store.dispatch(addExpense({description: 'Gas Bill', createdDate: 1000}));
store.dispatch(addExpense({description: 'rent', amount: 109500}));
// store.dispatch(setTextFilter('bill'));
// store.dispatch(setTextFilter('water'));

// store.dispatch(removeExpense({id: expense1.expense.id}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(store.getState(), visibleExpenses);

const jsx = (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('placedhere'));