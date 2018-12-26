import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdDate = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdDate
    }
});

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const expensesReducerDefaultState = [];
const expensesReducer = (prevState = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...prevState, action.expense];
        case 'REMOVE_EXPENSE':
            return prevState.filter(({ id }) => id !== action.id);
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
    switch (action) {
        default:
            return prevState;
    }
};


const store = createStore(combineReducers
    ({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

const expense1 = store.dispatch(addExpense({ description: 'Rent', amount: 900 }));
const expense2 = store.dispatch(addExpense({ description: 'Coffee', amount: 8 }));

store.dispatch(removeExpense({ id: expense2.expense.id }));

console.log(store.getState());