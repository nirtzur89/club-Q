import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpensesList from './ExpensesList';
import ExpenseListFilters from './ExpenseListFilters';

const Dashboard = () => (
  <div>
    <h1>Going Out?</h1>
    <Link to='/clubs'>Check Q's</Link>
    <h1>Allready Q'ing?</h1>
    <Link to='/add'>Give us an update</Link>
  </div>
);

export default Dashboard;
// <ExpenseListFilters />
// <ExpensesList />
