//expenses reducer
const updateReducerDefaultState = [];
const updateReducer = (state = updateReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_UPDATE':
      return [...state, action.update];
    case 'REMOVE_UPDATE':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

export default updateReducer;
