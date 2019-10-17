import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import getVisibleUpdates from '../selectors/updates';

const ClubPage = props => {
  console.log('show visible', props.updates);
  return <div>this is edit for: {props.match.params.id}</div>;
};

const mapStateToProps = (state, props) => {
  const club = props.match.params.id;
  return {
    updates: getVisibleUpdates(state.updates, { club })
  };
};

export default connect(mapStateToProps)(ClubPage);
