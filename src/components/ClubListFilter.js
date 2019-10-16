import React from 'react';
import { connect } from 'react-redux';
import { setClubFilter } from '../actions/filters';

const ClubListFilter = props => (
  <div>
    <input
      type='text'
      value={props.filters.club}
      onChange={e => {
        props.dispatch(setClubFilter(e.target.value));
      }}
    />
  </div>
);

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ClubListFilter);
