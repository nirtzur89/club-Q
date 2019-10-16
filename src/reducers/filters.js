//filter Reducer
const filtersReducerDefaultState = {
  club: ''
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_CLUB_FILTER':
      return {
        ...state,
        club: action.club
      };
    default:
      return state;
  }
};

export default filtersReducer;
