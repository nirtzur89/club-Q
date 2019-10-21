import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ClubsListItem = props => {
  return (
    <div>
      <Link to={`/clubs/${props.club}`}>
        <button className='club-button'>{props.club}</button>
      </Link>
    </div>
  );
};

export default connect()(ClubsListItem);
