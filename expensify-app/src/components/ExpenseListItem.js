import React from 'react';

export default ({description, amount, createdDate}) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} at {createdDate}</p>
    </div>
);