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

export { addExpense, removeExpense, editExpense };
