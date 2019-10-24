import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ClubsListItem = props => {
  return (
    <Link to={`/clubs/${props.club}`}>
      <button className='club-button'>{props.club}</button>
    </Link>
  );
};

export default connect()(ClubsListItem);
