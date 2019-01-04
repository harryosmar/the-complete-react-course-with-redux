import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm.js';
import { editExpense, removeExpense } from '../actions/expenses.js';

const EditExpensePage = (props) => (
    <div>
        <h1>Edit Expense</h1>
        <p>{props.match.params.id}</p>
        <ExpenseForm
            expense={props.expense}
            onSubmit={(expense) => {
                props.dispatch(editExpense(props.expense.id, expense));
                props.history.push('/');
            }}
        />
        <button onClick={
            () => {
                props.dispatch(removeExpense({id: props.expense.id}));
                props.history.push('/');
            }
        }>
            remove
        </button>
    </div>
);

const mapStateToProps = (state, props) => (
    {
        expense: state.expenses.find(( { id } ) => id === props.match.params.id)
    }
);

export default connect(mapStateToProps)(EditExpensePage);