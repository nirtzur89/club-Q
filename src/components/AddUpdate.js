import React from 'react';
import UpdateForm from './UpdateForm';
import { connect } from 'react-redux';
import { startAddUpdate } from '../actions/updates';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

export class AddUpdate extends React.Component {
  onSubmit = update => {
    this.props.startAddUpdate(update);
    this.props.history.push('/clubs');
  };
  render() {
    return (
      <div className='base-component'>
        <h1>Add Update</h1>
        <UpdateForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     // updates: getVisibleUpdates(state.updates, state.filters),
//     clubs: state.clubs
//   };
// };
const mapDispatchToProps = dispatch => ({
  startAddUpdate: update => dispatch(startAddUpdate(update))
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddUpdate);
