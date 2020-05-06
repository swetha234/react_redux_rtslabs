import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchValue, fetchData } from './actions/simpleAction';
import './App.css';
import { SearchResults } from './SearchResults';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { searchvalue: ' ' };
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
      <div style={container}>
        <div className='class1' style={headerStyle}>
          <h1>HACKER NEWS</h1>
          <h3>The most readable results on the web...!!!</h3>
          <input
            style={boxStyle}
            type='text'
            onChange={this.onChangehandler}
            placeholder='Search stories....'
          ></input>
          <div>
            <button style={buttonStyle} onClick={this.searchHackernews}>
              Search{' '}
            </button>{' '}
          </div>
        </div>

        <div className='class2'>
          <p
            style={{
              fontFamily: 'Helvetica',
              fontSize: '20px',
              marginLeft: '20px'
            }}
          >
            Search Results...
          </p>

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

//Styling

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '70px',
  fontFamily: 'Helvetica',
  size: '35'
};
const boxStyle = {
  width: '40%',
  height: '30px',
  borderRadius: '20px 20px',
  fontFamily: 'Helvetica',
  fontSize: '20px'
};

const container = {
  height: 'auto',
  backgroundColor: '#f5eaea'
};

const buttonStyle = {
  marginTop: '30px',
  height: '30px',
  width: '8%',
  borderRadius: '20px 20px',
  fontSize: '15px',
  fontFamily: 'Helvetica'
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
