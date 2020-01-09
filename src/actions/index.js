// // import axios from 'axios';

// // export const FETCH_SOMETHING = 'FETCH_SOMETHING';
// // const ROOT_URL =
// //   'https://hn.algolia.com/api/v1/search_by_date?query=${searchitem}&tags=story';

// // export function fetchWeather(city) {
// //   const url = `${ROOT_URL}&q=${aParamYouMayNeed}`;
// //   const request = axios.get(url);

// //   return {
// //     type: FETCH_SOMETHING,
// //     payload: request
// //   };
// // }

// import axios from 'axios';
// export function fetchArticleDetails() {
//   return function(dispatch) {
//     return axios
//       .get(
//         'https://hn.algolia.com/api/v1/search_by_date?query=${searchitem}&tags=story'
//       )
//       .then(({ data }) => {
//         dispatch(setArticleDetails(data));
//       });
//   };
// }
