import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ClubsList from './ClubsList';

const Dashboard = () => (
  <div>
    <ClubsList />
  </div>
);

export default Dashboard;
