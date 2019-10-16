import React from 'react';
import { connect } from 'react-redux';
import ClubsListItem from './ClubsListItem';
import getVisibleUpdates from '../selectors/updates';
import getVisibleClubs from '../selectors/clubs';
import ClubListFilter from './ClubListFilter';

const ClubsList = props => {
  console.log('testing123', props);
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
    clubs: getVisibleClubs(state.clubs, state.filters)
  };
};

export default connect(mapStateToProps)(ClubsList);
