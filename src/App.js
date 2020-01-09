// import React, { Component }  from 'react';
// import SearchBar from './Components/SearchBar';
// import FetchData from './Components/FetchData';
// import { connect } from 'react-redux';
// import { fetchArticleDetails } from "../actions";

// class App extends Component {
//   state = {};

//   componentDidMount() {
//     this.props.fetchArticleDetails() ;
//   render() {
//     const { title, url, author } = this.props.data;

//     return (
//       <div>
//         <SearchBar />
//         <main>
//           {this.props.isLoadingData ? (
//             "Loading . . ."
//           ) : (
//             <Article
//               title={title}
//               url={url}
//               author={author}
//             />
//           )}
//         </main>
//       </div>
//     );
//   }

// }

// const mapStateToProps = ({ data = {}, isLoadingData = false }) => ({
//   data,
//   isLoadingData
// });
// export default connect(
//   mapStateToProps,
//   {
//     fetchArticleDetails
//   }
// )(App);

// export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './Components/SearchBar';
import FetchData from './Components/FetchData';
import { fetchArticleDetails } from './actions';

class App extends Component {
  state = {};
  componentDidMount() {
    this.props.fetchArticleDetails();
  }
  render() {
    const { title, url, author } = this.props.data;

    return (
      <div>
        <SearchBar />
        <main>
          {this.props.isLoadingData ? (
            'Loading . . .'
          ) : (
            <FetchData title={title} url={url} author={author} />
          )}
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({ data = {}, isLoadingData = false }) => ({
  data,
  isLoadingData
});
export default connect(mapStateToProps, {
  fetchArticleDetails
})(App);
