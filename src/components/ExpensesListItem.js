import React from 'react';
import { connect } from 'react-redux';
import { removeUpdate } from '../actions/updates';

const ExpenseListItem = ({
  club,
  people,
  moving,
  createdAt,
  estimation,
  freeText
}) => {
  return (
    <div>
      <div>
        {club && <h3>{club}</h3>}
        <button
          onClick={() => {
            dispatch(removeUpdate({ id }));
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default connect()(ExpenseListItem);
