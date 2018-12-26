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

const editExpense = (
    id,
    {
        description = '',
        note = '',
        amount = 0,
        createdDate = 0
    } = {}
) => ({
    type: 'EDIT_EXPENSE',
    id,
    expense: {
        description,
        note,
        amount,
        createdDate
    }
});

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

const expensesReducerDefaultState = [];
const expensesReducer = (prevState = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...prevState, action.expense];
        case 'EDIT_EXPENSE':
            return prevState.map((expense) => {
                if (expense.id === action.id) {
                    return {...expense, ...action.expense};
                }

                return expense;
            });
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
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {...prevState, text: action.text};
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

store.dispatch(removeExpense({ id: expense1.expense.id }));
store.dispatch(editExpense(expense2.expense.id, {amount: 555}));


store.dispatch(setTextFilter('rent'));
console.log(store.getState());

store.dispatch(setTextFilter());
console.log(store.getState());