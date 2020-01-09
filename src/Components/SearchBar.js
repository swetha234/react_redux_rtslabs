import React from 'react';

function SearchBar() {
  return (
    <header style={headerStyle}>
      <h1> Hacker News</h1>
      <div>
        <input
          type='text'
          placeholder='Search..'
          style={{ width: '370px', height: '30px' }}
        />
        <div>
          <button>Search</button>
        </div>
      </div>
    </header>
  );
}

const headerStyle = {
  background: '#a35638',
  color: '#fff',
  textAlign: 'center',
  padding: '60px'
};

export default SearchBar;
