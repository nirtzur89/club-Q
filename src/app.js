import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';

//redux imports
import { addUpdate } from './actions/updates';

import getVisibleUpdates from './selectors/updates';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleUpdates = getVisibleUpdates(state.updates, state.filters);
  console.log(visibleUpdates);
});

const updateOne = store.dispatch(
  addUpdate({ people: 72000, club: 'Berghain', createdAt: 5000 })
);
const updateTwo = store.dispatch(
  addUpdate({ people: 30000000, club: 'Berghain', createdAt: 500 })
);
const updateThree = store.dispatch(
  addUpdate({ people: 50000, club: 'Kitkat', createdAt: -2500 })
);
const updateFour = store.dispatch(
  addUpdate({ people: 1000, club: 'Renate', createdAt: 1000 })
);

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('app')
);
