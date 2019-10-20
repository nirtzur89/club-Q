import React from 'react';
import { connect } from 'react-redux';
import ClubsListItem from './ClubsListItem';
import getVisibleUpdates from '../selectors/updates';
import getVisibleClubs from '../selectors/clubs';
import ClubListFilter from './ClubListFilter';

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
  const distinct = (value, index, self) => {
    return self.indexOf(value) === index;
  };
  const mapped = state.updates.map(update => update.club);
  const distinctClubs = mapped.filter(distinct);

  return {
    updates: getVisibleUpdates(state.updates, state.filters),
    clubs: getVisibleClubs(distinctClubs, state.filters)
  };
};

export default connect(mapStateToProps)(ClubsList);
