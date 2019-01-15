import moment from 'moment';
import expensesReducer from '../../reducers/expenses.js';
import { addExpense, editExpense, removeExpense } from '../../actions/expenses.js';

const addExpenseAction = addExpense({
    description: "Water Bill",
    note: "",
    amount: 0,
    createdDate: moment(0).valueOf()
});

test('call addExpense', () => {
    expect(expensesReducer([], addExpenseAction))
    .toEqual(
        [
            {
                ...addExpenseAction.expense,
                id: expect.any(String)
            }
        ]
    );
});

const editExpenseAction = editExpense(
    1,
    {
        description: "Gass Bill",
        note: "change to gass bill",
        amount: 999,
    }
);

test('call editExpense', () => {
    expect(expensesReducer(
        [
            {
                id: 1,
                description: "Water Bill",
                note: "",
                amount: 1000,
                createdDate: moment(0).valueOf()
            }
        ],
        editExpenseAction
    ))
    .toEqual(
        [
            {
                id: 1,
                description: "Gass Bill",
                note: "change to gass bill",
                amount: 999,
                createdDate: moment(0).valueOf()
            }
        ]
    );
});

const removeExpenseAction = removeExpense({ id: 1 });

test('call removeExpense', () => {
    expect(expensesReducer(
        [
            {
                id: 1,
                description: "Water Bill",
                note: "",
                amount: 1000,
                createdDate: moment(0).valueOf()
            }
        ],
        removeExpenseAction
    ))
    .toEqual([]);
});