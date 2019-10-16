import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ClubsList from './ClubsList';
import ClubListFilter from './ClubListFilter';

const Dashboard = () => (
  <div>
    <ClubListFilter />
    <ClubsList />
  </div>
);

export default Dashboard;
