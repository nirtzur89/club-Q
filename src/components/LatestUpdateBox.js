import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

const LatestUpdateBox = props => {
  return (
    <div className='latest-box'>
      <h3>latest update:</h3>
      <p>Updated: {moment(props.update.createdAt).fromNow()}</p>
      <p>Estimated waiting time: {props.update.estimation}</p>
      <p>People Q'ing: {props.update.people}</p>
      {props.update.moving && <p>The Q is {props.update.moving}</p>}
      {props.update.rejection && (
        <p>Rejection status: {props.update.rejection}</p>
      )}
      {props.update.freeText && (
        <p>Notes from Poster: {props.update.freeText}</p>
      )}
    </div>
  );
};

export default connect()(LatestUpdateBox);
