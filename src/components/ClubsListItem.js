import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ClubsListItem = props => {
  return (
    <div>
      <Link to={`/clubs/${props.club}`}>
        <h3>{props.club}</h3>
      </Link>
    </div>
  );
};

export default connect()(ClubsListItem);
