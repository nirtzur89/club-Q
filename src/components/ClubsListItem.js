import React from 'react';
import { connect } from 'react-redux';

const ClubsListItem = props => {
  return (
    <div>
      <h3>{props.club}</h3>
    </div>
  );
};

export default connect()(ClubsListItem);
