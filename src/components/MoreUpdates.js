import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import UpdateBox from './UpdateBox';

const MoreUpdates = props => {
  return (
    <div>
      {props.updates.map(update => (
        <UpdateBox update={update} key={update.id} />
      ))}
    </div>
  );
};

export default connect()(MoreUpdates);
