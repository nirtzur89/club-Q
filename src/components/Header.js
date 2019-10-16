import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>Club Q</h1>
    <NavLink to='/' activeClassName='active-nav' exact={true}>
      Home
    </NavLink>
    <NavLink to='/add' activeClassName='active-nav'>
      Add Update
    </NavLink>
    <NavLink to='/clubs' activeClassName='active-nav'>
      Clubs
    </NavLink>
    <NavLink to='/Info' activeClassName='active-nav'>
      Info
    </NavLink>
  </div>
);

export default Header;
