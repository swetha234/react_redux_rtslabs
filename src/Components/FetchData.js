// // import React from 'react';

// // export default class FetchData extends React.Component {
// //   state = {
// //     loading: true,
// //     person: null
// //   };

// //   componentDidMount() {
// //     this.FetchData();
// //   }
// //   fetchData() {
// //     fetch('https://hn.algolia.com/api')
// //       .then(response => response.json())
// //       .then(parsedJSON => console.log(parsedJSON.results))
// //       .catch(error => console.log('parsing failed', error));
// //   }

// //   render() {
// //     if (this.state.loading) {
// //       return <div>loading...</div>;
// //     }

// //     if (!this.state.person) {
// //       return <div>didn't get a person</div>;
// //     }
// //     return <div></div>;
// //   }
// // }

// // const FetchData = ({ title, story }) => {
// //   return (
// //     <StyledArticle>
// //       <h1>{title}</h1>

// //       {story.map(story => (
// //         <p>{story.text}</p>
// //       ))}
// //     </StyledArticle>
// //   );
// // };

// import React, { Component } from 'react';

// class Search extends Component {
//   state = {
//     query: ''
//   };

//   handleInputChange = () => {
//     this.setState({
//       query: this.search.value
//     });
//   };

//   render() {
//     return (
//       <form>
//         <input
//           placeholder='Search for...'
//           ref={input => (this.search = input)}
//           onChange={this.handleInputChange}
//         />
//         <p>{this.state.query}</p>
//       </form>
//     );
//   }
// }

// export default Search;
