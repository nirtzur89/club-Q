import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

const UpdateBox = props => {
  return (
    <div>
      <h3>{props.update.club}</h3>
      <p>{props.update.createdAt}</p>
      <p>{props.update.estimation}</p>
    </div>
  );
};

export default connect()(UpdateBox);