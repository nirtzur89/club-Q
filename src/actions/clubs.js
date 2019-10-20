import uuid from 'uuid';
import database from '../firebase/firebase';

//ADD_CLUB
export const addClubs = club => ({
  type: 'ADD_CLUBS',
  club
});

// SET_UPDATES - read
export const setClubs = clubs => ({
  type: 'SET_CLUBS',
  clubs
});

//fetch --> parse --> dispatch
export const startSetClubs = () => {
  return dispatch => {
    return database
      .ref('clubs')
      .once('value')
      .then(snapshot => {
        const clubs = [];
        snapshot.forEach(child => {
          if (!clubs.includes(child)) {
            clubs.push(child.val());
          }
        });
        dispatch(setClubs(clubs));
      });
  };
};
