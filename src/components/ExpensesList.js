import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpensesListItem';
import getVisibleUpdates from '../selectors/updates';

const ExpensesList = props => (
  <div>
    <h2>expenses:</h2>
    {props.expenses.map(expense => (
      <ExpenseListItem {...expense} key={expense.id} />
    ))}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: getVisibleUpdates(state.updates, state.filters)
  };
};

export default connect(mapStateToProps)(ExpensesList);

// <ExpenseListItem {...props} key={expense.props.id} />
