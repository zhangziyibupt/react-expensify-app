import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense} />
                })
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

// HOC component
// connect() does not return HOC component, it returns a function that converts regular component to HOC
export default connect(mapStateToProps)(ExpenseList);