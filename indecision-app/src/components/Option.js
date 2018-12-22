import React from 'react';

const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.option}</p>
        &nbsp;
        <button className="button button--link"
            onClick={(e) => {
                props.handleRemoveOption(props.option);
            }}>
            remove
        </button>
    </div>
);

export default Option;