import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/updates';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const AddUpdate = props => (
  <div>
    <h1>Add expense</h1>
    <ExpenseForm
      onSubmit={expense => {
        props.dispatch(addExpense(expense));
        props.history.push('/');
      }}
    />
  </div>
);
export default connect()(AddUpdate);
