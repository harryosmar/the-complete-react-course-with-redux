import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters.js';

const ExpenseListFilter = (props) => (
    <div>
        <input value={props.filters.text} onChange={
            (e) => {
                props.dispatch(setTextFilter(e.target.value));
            }
        }/>
    </div>
);

const mapStateToProps = (state) => ({
    filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilter);