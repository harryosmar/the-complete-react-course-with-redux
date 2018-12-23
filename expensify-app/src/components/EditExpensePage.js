import React from 'react';

const EditExpensePage = (props) => (
    <div>
        edit expense with id : {props.match.params.id}
    </div>
);

export default EditExpensePage;