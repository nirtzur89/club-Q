const clubsReducerDefaultState = [];
const clubsReducer = (state = clubsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_UPDATE':
      //console.log('thisss', state, action.update.club);
      if (!state.includes(action.update.club.toUpperCase())) {
        return [...state, action.update.club.toUpperCase()];
      }

    default:
      return state;
  }
};

export default clubsReducer;
