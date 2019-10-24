import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import LatestUpdateBox from './LatestUpdateBox';

const MoreUpdates = props => {
  return (
    <div>
      {props.updates.map(update => (
        <LatestUpdateBox update={update} key={update.id} />
      ))}
    </div>
  );
};

export default connect()(MoreUpdates);
