import database from '../firebase/firebase';

//ADD_UPDATE - Create
export const addUpdate = update => ({
  type: 'ADD_UPDATE',
  update
});

export const startAddUpdate = (updateData = {}) => {
  return dispatch => {
    const {
      club = '',
      people = '',
      moving = '',
      estimation = 0,
      freeText = '',
      rejection = '',
      createdAt = Date.now()
    } = updateData;
    const update = {
      club,
      people,
      moving,
      estimation,
      freeText,
      rejection,
      createdAt
    };

    database
      .ref('updates')
      .push(update)
      .then(ref => {
        dispatch(
          addUpdate({
            id: ref.key,
            ...update
          })
        );
      });
  };
};
// SET_UPDATES - read
export const setUpdates = updates => ({
  type: 'SET_UPDATES',
  updates
});

//fetch --> parse --> dispatch
export const startSetUpdates = () => {
  return dispatch => {
    return database
      .ref('updates')
      .once('value')
      .then(snapshot => {
        const updates = [];
        snapshot.forEach(child => {
          updates.push({
            id: child.key,
            ...child.val()
          });
        });
        dispatch(setUpdates(updates));
      });
  };
};

//REMOVE_UPDATE
export const removeUpdate = ({ id } = {}) => ({
  type: 'REMOVE_UPDATE',
  id
});
