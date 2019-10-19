import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import getVisibleUpdates from '../selectors/updates';
import UpdateBox from './UpdateBox';
import LatestUpdateBox from './LatestUpdateBox';

const ClubPage = props => {
  console.log('show visible', props.updates);
  return (
    <div>
      <h2>Latest Updates from - {props.match.params.id}</h2>
      <LatestUpdateBox update={props.updates[0]} key={props.updates[0].id} />
      <h2>more updates:</h2>

      {props.updates.slice(0, 6).map(update => {
        return update.id !== props.updates[0].id ? (
          <UpdateBox update={update} key={update.id} />
        ) : (
          <h1></h1>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const club = props.match.params.id;
  return {
    updates: getVisibleUpdates(state.updates, { club })
  };
};

export default connect(mapStateToProps)(ClubPage);
