import moment from 'moment';
import { getVisibleExpenses } from '../../selectors/expenses.js';


// 01-Jan-2019 20:01:17 GMT+0000
const expenseWaterBill = {
    id: "cc62a2ff-3518-481d-ade4-e605d0b0689b",
    description: "Water Bill",
    note: "",
    amount: 0,
    createdDate: moment(0).valueOf()
};

const expenseGassBill = {
    id: "5a1fcc5a-9e66-48d4-974b-126e1538f86f",
    description: "Gas Bill",
    note: "",
    amount: 1000,
    createdDate: moment(0).add(11, 'days').valueOf()
};

const expensePhoneBill = {
    id: "5a1fcc5a-9e66-48d4-974b-126e15380987",
    description: "Phone Bill",
    note: "",
    amount: 800,
    createdDate: moment(0).subtract(31, 'days').valueOf()
};

const expenses = [
    expenseWaterBill,
    expenseGassBill,
    expensePhoneBill
];

test('Should be able to filter by text', () => {
    expect(
        getVisibleExpenses(expenses, {text: 'water'})
    ).toEqual(
        [expenseWaterBill]
    );

    expect(
        getVisibleExpenses(expenses, {text: 'bill'})
    )
    .toEqual(expenses);
});

test('Should be able to sortBy amount', () => {
    expect(
        getVisibleExpenses(expenses, {sortBy: 'amount'})
    ).toEqual(
        [expenseGassBill, expensePhoneBill, expenseWaterBill]
    );
});

test('Should be able to sortBy date', () => {
    expect(
        getVisibleExpenses(expenses, {sortBy: 'date'})
    ).toEqual(
        [expenseGassBill, expenseWaterBill, expensePhoneBill]
    );
});

test('Should be able to filter by startDate', () => {
    expect(
        getVisibleExpenses(
            expenses,
            {
                startDate: moment(0)
            }
        )
    ).toEqual([
        expenseWaterBill,
        expenseGassBill
    ]);
});

test('Should be able to filter by endDate', () => {
    expect(
        getVisibleExpenses(
            expenses,
            {
                endDate: moment(0)
            }
        )
    ).toEqual([
        expenseWaterBill,
        expensePhoneBill
    ]);
});

test('Should be able to filter by date range start-end', () => {
    expect(
        getVisibleExpenses(
            expenses,
            {
                startDate: moment(0),
                endDate: moment(0).add(5, 'days')
            }
        )
    ).toEqual([
        expenseWaterBill
    ]);
});


test('Should be able to combine all filters', () => {
    expect(
        getVisibleExpenses(
            expenses,
            {
                text: 'bill',
                endDate: moment(0),
                sortBy: 'amount'
            }
        )
    ).toEqual([
        expensePhoneBill,
        expenseWaterBill
    ]);
});