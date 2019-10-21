import React from 'react';
import { connect } from 'react-redux';
import ClubsListItem from './ClubsListItem';
import getVisibleUpdates from '../selectors/updates';
import getVisibleClubs from '../selectors/clubs';
import ClubListFilter from './ClubListFilter';

const ClubsList = props => {
  return (
    <div className='base-component'>
      <div className='title'>
        <h2 className='title-name'>Clubs:</h2>
        <ClubListFilter className='title-filter' />
      </div>
      <div className='clubs'>
        {props.clubs.map(club => (
          <ClubsListItem className='club-item' club={club} key={club} />
        ))}
      </div>
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
