import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchValue, fetchData } from './actions/simpleAction';

import './App.css';
import { SearchResults } from './SearchResults';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { searchvalue: '' };
  }
  onChangehandler = event => {
    this.props.setSearchValue(event.target.value);
  };
  searchHackernews = event => {
    const query = this.props.searchvalue;
    this.props.fetchData(query);
  };

  render() {
    return (
      <div className='App'>
        <input type='text' onChange={this.onChangehandler}></input>
        <button onClick={this.searchHackernews}>search </button>
        <div>
          {this.props.results && <SearchResults data={this.props.results} />}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  searchvalue: state.simpleReducer.searchvalue,
  results: state.simpleReducer.results
});

const mapDispatchToProps = dispatch => ({
  setSearchValue: value => dispatch(setSearchValue(value)),
  fetchData: value => dispatch(fetchData(value))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
