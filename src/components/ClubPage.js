import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const ClubPage = props => {
  console.log('thissss', props.match.params.id);
  return <div>this is edit for: {props.match.params.id}</div>;
};

export default ClubPage;
