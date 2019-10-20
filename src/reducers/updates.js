//expenses reducer
const updateReducerDefaultState = [];
const updateReducer = (state = updateReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_UPDATE':
      return [...state, action.update];
    case 'SET_UPDATES':
      return action.updates;
    case 'EDIT_UPDATE':
      return state.map(update => {
        if (update.id === action.id) {
          return {
            ...update,
            ...action.updates
          };
        }
      });
    case 'REMOVE_UPDATE':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

export default updateReducer;
