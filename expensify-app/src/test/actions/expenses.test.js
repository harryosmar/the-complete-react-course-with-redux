import { addExpense, editExpense, removeExpense } from '../../actions/expenses.js';

test('should be able to generate removeExpense action', () => {
    expect(removeExpense({id: 1}))
    .toEqual({
        type: 'REMOVE_EXPENSE',
        id: 1
    });
});


test('should be able to generate editExpense action', () => {
    expect(editExpense(
        1,
        {
            description: 'description',
            note: 'note',
            amount: 100,
            createdDate: 11111
        }
    ))
    .toEqual({
        type: 'EDIT_EXPENSE',
        id: 1,
        expense: {
            description: 'description',
            note: 'note',
            amount: 100,
            createdDate: 11111
        }
    });
});

test('should be able to generate editExpense action with no update-data, should use the default value', () => {
    expect(editExpense(
        1
    ))
    .toEqual({
        type: 'EDIT_EXPENSE',
        id: 1,
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdDate: 0
        }
    });
});

test('should be able to generate addExpense action', () => {
    const expense =  {
        description: 'description',
        note: 'note',
        amount: 100,
        createdDate: 11111
    };

    const action = addExpense(expense);

    expect(action)
    .toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expense,
            id: expect.any(String)
        }
    });
});

test('should be able to generate addExpense action with no add-data, should use the default value', () => {
    expect(addExpense())
    .toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdDate: 0,
            id: expect.any(String)
        }
    });
});
