import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button
                disabled={props.options.length === 0}
                className="button button--link"
                disabled={props.options.length === 0} onClick={props.handleRemoveAll}
            >
                Remove All
            </button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Please add an option to get started</p>}
        <div>
            {props.options.map((option, index) => (
                <Option
                    key={index}
                    option={option}
                    count={index+1}
                    handleRemoveOption={props.handleRemoveOption}
                />
            ))}
        </div>
    </div>
);

export default Options;