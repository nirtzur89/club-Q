import { createStore, combineReducers } from 'redux';
import updatesReducer from '../reducers/updates';
import filtersReducer from '../reducers/filters';
import clubsReducer from '../reducers/clubs';

export default () => {
  const store = createStore(
    combineReducers({
      updates: updatesReducer,
      filters: filtersReducer,
      clubs: clubsReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
