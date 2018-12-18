import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            <button disabled={props.options.length === 0} onClick={props.handleRemoveAll}>Remove All</button>
            <p>Here are your options</p>
            <ol>
                {props.options.map((option, index) => (
                    <Option
                        key={index}
                        option={option}
                        handleRemoveOption={props.handleRemoveOption}
                    />
                ))}
            </ol>
        </div>
    );
};

export default Options;