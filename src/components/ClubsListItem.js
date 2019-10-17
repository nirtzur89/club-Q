import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ClubsListItem = props => {
  return (
    <div>
      <h3>{props.club}</h3>
      <Link to='/'>club page</Link>
    </div>
  );
};

export default connect()(ClubsListItem);
