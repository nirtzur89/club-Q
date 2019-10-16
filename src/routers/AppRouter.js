import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import NotFound from '../components/NotFound';
import AddUpdate from '../components/AddUpdate';
import Dashboard from '../components/Dashboard';
import Info from '../components/Info';
import Clubs from '../components/Clubs';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={Dashboard} exact={true} />
        <Route path='/add' component={AddUpdate} />
        <Route path='/clubs' component={Clubs} />
        <Route path='/info' component={Info} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
