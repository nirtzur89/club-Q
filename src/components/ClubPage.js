import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import getVisibleUpdates from '../selectors/updates';
import MoreUpdates from './MoreUpdates';
import LatestUpdateBox from './LatestUpdateBox';

const ClubPage = props => {
  const inPostTimeFrame = props.updates
    ? props.updates[0].createdAt > Date.now() - 17280000
    : false;
  const mapped = props.updates.slice(1, 6).map(update => update);

  return (
    <div className='update-page base-component'>
      <h2 className='update-page-title'>
        Showing Updates for {props.match.params.id}
      </h2>
      {inPostTimeFrame ? (
        <div>
          <LatestUpdateBox
            update={props.updates[0]}
            key={props.updates[0].id}
          />
          {mapped.length > 1 && (
            <div>
              <h2>more updates:</h2>
              <MoreUpdates updates={mapped} />
            </div>
          )}
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
