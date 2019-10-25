import React from 'react';
import { connect } from 'react-redux';
import ClubsListItem from './ClubsListItem';
import getVisibleUpdates from '../selectors/updates';
import getVisibleClubs from '../selectors/clubs';
import ClubListFilter from './ClubListFilter';

const ClubsList = props => {
  const theClubs = [
    'BERGHAIN',
    'KITKAT',
    'SCHWUZ',
    'RENATE',
    'GRIESSMUEHLE',
    'ABOUT-BLANK',
    'RITTER-BUTZKE',
    'TRESOR',
    'LAB-O-RATORY',
    'KATER-BLAU',
    'HOPPETOSSE',
    'SISYPHOS',
    'ELSE',
    'GRETCHEN',
    'WATERGATE',
    'SUICIDE'
  ];
  console.log('props', props);
  return (
    <div className='base-component'>
      <div className='title'>
        <h2 className='title-name'>Clubs:</h2>
        <ClubListFilter className='title-filter' />
      </div>
      <div className='clubs'>
        {theClubs.map(club => (
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
