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

export { getVisibleExpenses };