import { addExpense, editExpense, removeExpense } from '../actions/expenses.js';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters.js';
import configureStore from '../store/configureStore';
import { getVisibleExpenses } from '../selectors/expenses';

const store = configureStore();

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