export const setSearchValue = value => {
  return {
    type: 'SET_SEARCH_VALUE',
    payload: value
  };
};

export const fetchData = value => dispatch => {
  fetch('http://hn.algolia.com/api/v1/search?query=' + value)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: 'SET_SEARCH_RESULT',
        payload: data
      });
    });
};
