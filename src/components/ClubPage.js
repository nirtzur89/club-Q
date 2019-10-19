import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import getVisibleUpdates from '../selectors/updates';
import UpdateBox from './UpdateBox';
import LatestUpdateBox from './LatestUpdateBox';

const ClubPage = props => {
  console.log('show visible', props.updates);
  const inPostTimeFrame = props.updates[0].createdAt > Date.now() - 86400;
  return (
    <div>
      <h2>Latest Updates from - {props.match.params.id}</h2>
      {inPostTimeFrame && (
        <LatestUpdateBox update={props.updates[0]} key={props.updates[0].id} />
      )}
      {inPostTimeFrame ? (
        <div>
          <h2>more updates:</h2>
          {props.updates.slice(0, 6).map(update => {
            return (
              update.id !== props.updates[0].id && (
                <UpdateBox update={update} key={update.id} />
              )
            );
          })}
        </div>
      ) : (
        <div>
          <h2>No Updates from the past 24 hours</h2>
          <Link to='/add'>
            {' '}
            <button>Give Us an Update</button>{' '}
          </Link>
        </div>
      )}
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

// : (
//   <h1 key={'no posts'}>Nothing Posted in the last 24 hours</h1>
// );
