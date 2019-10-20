import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import './firebase/firebase';

import './styles/styles.scss';

//redux imports
import { startSetUpdates } from './actions/updates';
import { startSetClubs, addClubs } from './actions/clubs';

import getVisibleUpdates from './selectors/updates';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleUpdates = getVisibleUpdates(state.updates, state.filters);
  console.log(visibleUpdates);
});

// store.dispatch(addUpdate({ people: 72000, club: 'Berghain', createdAt: 5000 }));
// store.dispatch(
//   addUpdate({
//     people: 30,
//     club: 'Berghain',
//     createdAt: 500
//   })
// );
// store.dispatch(addUpdate({ people: 500000, club: 'Berghain', createdAt: 400 }));
// store.dispatch(addUpdate({ people: 50000, club: 'Kitkat', createdAt: -2500 }));
// store.dispatch(addUpdate({ people: 1000, club: 'Renate', createdAt: 1000 }));

// console.log(store.getState());
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetUpdates()).then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <AppRouter />
    </Provider>,
    document.getElementById('app')
  );
});
