import React from 'react';

const ExpenseListItem = ({description, amount, createdDate}) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} at {createdDate}</p>
    </div>
);

export default ExpenseListItem;