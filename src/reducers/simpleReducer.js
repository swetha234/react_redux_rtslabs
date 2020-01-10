export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_SEARCH_VALUE':
      return {
        ...state,
        searchvalue: action.payload
      };
    case 'SET_SEARCH_RESULT':
      return {
        ...state,
        results: action.payload
      };
    default:
      return state;
  }
};
