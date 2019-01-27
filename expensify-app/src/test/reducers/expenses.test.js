import moment from 'moment';
import expensesReducer from '../../reducers/expenses.js';
import { addExpense, editExpense, removeExpense } from '../../actions/expenses.js';

test('should set empty array as default state value', () => {
    expect(expensesReducer(undefined, { TYPE: '@@INIT' }))
    .toEqual([]);
});

const addExpenseAction = addExpense({
    description: "Water Bill",
    note: "",
    amount: 0,
    createdDate: moment(0).valueOf()
});

test('call addExpense', () => {
    expect(expensesReducer(undefined, addExpenseAction))
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

test('should remove expense by id', () => {
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

const expenses = [
    {
        id: 2,
        description: "Water Bill",
        note: "",
        amount: 1000,
        createdDate: moment(0).valueOf()
    }
];

test('should not remove expense by id if not found', () => {
    expect(expensesReducer(
        expenses,
        removeExpenseAction
    ))
    .toEqual(expenses);
});