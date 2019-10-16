import React from 'react';
import UpdateForm from './UpdateForm';
import { connect } from 'react-redux';
import { addUpdate } from '../actions/updates';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const AddUpdate = props => (
  <div>
    <h1>Add update</h1>
    <UpdateForm
      clubs={props.clubs}
      onSubmit={update => {
        props.dispatch(addUpdate(update));
        props.history.push('/');
      }}
    />
  </div>
);

const mapStateToProps = state => {
  return {
    // updates: getVisibleUpdates(state.updates, state.filters),
    clubs: state.clubs
  };
};

export default connect(mapStateToProps)(AddUpdate);
