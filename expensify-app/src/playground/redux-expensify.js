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
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const setStartDate = ( startDate = undefined ) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = ( endDate = undefined ) => ({
    type: 'SET_END_DATE',
    endDate
});

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
        case 'SORT_BY_AMOUNT':
            return {...prevState, sortBy: 'amount'};
        case 'SORT_BY_DATE':
            return {...prevState, sortBy: 'date'};
        case 'SET_START_DATE':
            return {...prevState, startDate: action.startDate};
        case 'SET_END_DATE':
            return {...prevState, endDate: action.endDate};
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


const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate} ) => {
    let visibleExpenses = expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdDate >= startDate ;
        const endDateMatch = typeof endDate !== 'number' ||  expense.createdDate <= endDate;
        const textMatch = !text || expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    });

    visibleExpenses.sort((a, b) => {
        if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        } else if (sortBy === 'date') {
            return a.createdDate < b.createdDate ? 1 : -1;
        }

        return 0;
    });

    return visibleExpenses;
};

store.subscribe(() => {
    const state = store.getState();
    console.log(
        getVisibleExpenses(state.expenses, state.filters),
        state.filters
    );
});

const expense1 = store.dispatch(addExpense({ description: 'Rent', amount: 900, 'createdDate': 126 }));
const expense2 = store.dispatch(addExpense({ description: 'Coffee', amount: 8, 'createdDate': 1251 }));

// store.dispatch(removeExpense({ id: expense1.expense.id }));
// store.dispatch(editExpense(expense2.expense.id, {amount: 555}));

// store.dispatch(setTextFilter('rent'));
// console.log(store.getState());

// store.dispatch(setTextFilter());
// console.log(store.getState());

store.dispatch(sortByAmount());
// console.log(store.getState());

// store.dispatch(sortByDate());
// console.log(store.getState());

store.dispatch(setStartDate(125));
// console.log(store.getState());

// store.dispatch(setStartDate());
// console.log(store.getState());

store.dispatch(setEndDate(1250));
// console.log(store.getState());

// store.dispatch(setEndDate());
// console.log(store.getState());