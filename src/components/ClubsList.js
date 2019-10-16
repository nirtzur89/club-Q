import React from 'react';
import { connect } from 'react-redux';
import ClubsListItem from './ClubsListItem';
import getVisibleUpdates from '../selectors/updates';

const ClubsList = props => {
  return (
    <div>
      <h2>Clubs:</h2>
      {props.clubs.map(club => (
        <ClubsListItem club={club} key={club} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    updates: getVisibleUpdates(state.updates, state.filters),
    clubs: state.clubs
  };
};

export default connect(mapStateToProps)(ClubsList);
