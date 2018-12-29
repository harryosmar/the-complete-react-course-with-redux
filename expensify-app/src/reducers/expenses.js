const expensesReducerDefaultState = [];

export default (prevState = expensesReducerDefaultState, action) => {
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