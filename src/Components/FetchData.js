// import React from 'react';

// export default class FetchData extends React.Component {
//   state = {
//     loading: true,
//     person: null
//   };

//   componentDidMount() {
//     this.FetchData();
//   }
//   fetchData() {
//     fetch('https://hn.algolia.com/api')
//       .then(response => response.json())
//       .then(parsedJSON => console.log(parsedJSON.results))
//       .catch(error => console.log('parsing failed', error));
//   }

//   render() {
//     if (this.state.loading) {
//       return <div>loading...</div>;
//     }

//     if (!this.state.person) {
//       return <div>didn't get a person</div>;
//     }
//     return <div></div>;
//   }
// }
