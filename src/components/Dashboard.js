import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpensesList from './ExpensesList';
import ExpenseListFilters from './ExpenseListFilters';

const Dashboard = () => (
  <div>
    <div className='dash container'>
      <h1>Going Out?</h1>
      <Link to='/clubs'>
        <button type='button' className=' btn btn-pos btn-light btn-lg'>
          Check Q's
        </button>
      </Link>
    </div>
    <div className='dash container'>
      <h1>Allready Q'ing?</h1>
      <Link to='/add'>
        <button type='button' className=' btn btn-pos-2 btn-light btn-lg'>
          Give us an update
        </button>
      </Link>
    </div>
  </div>
);

export default Dashboard;
// <ExpenseListFilters />
// <ExpensesList />
