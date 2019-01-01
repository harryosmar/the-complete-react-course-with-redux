import React from 'react';
import ExpenseList from './ExpenseList.js';
import ExpenseListFilter from './ExpenseListFilter.js';

const ExpenseDashboardPage = () => (
    <div>
        This is dashboard expense page
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;