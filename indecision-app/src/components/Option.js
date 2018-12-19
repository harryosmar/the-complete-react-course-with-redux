import React from 'react';

const Option = (props) => (
    <li>
        {props.option}
        &nbsp;
        <button onClick={(e) => {
            props.handleRemoveOption(props.option);
        }}>remove</button>
    </li>
);

export default Option;