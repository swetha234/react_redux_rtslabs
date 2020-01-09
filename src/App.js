// import React, { Component } from 'react';
// import './App.css';
// // import FetchData from './Components/FetchData';

// class App extends Component {
//   state = {
//     visible: true
//   };

//   render() {
//     return <div className='App'>{/* <FetchData /> */} Hello</div>;
//   }
// }

// export default App;

import React, { useState, useEffect } from 'react';

import './App.css';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    const [item] = data.results;
    setData(item);
    setLoading(false);
  }, []);

  return { data, loading };
};

export default () => {
  const [count, setCount] = useState(0);
  const { data, loading } = useFetch('https://hn.algolia.com/');

  return <div>{loading ? <div>...loading</div> : <div>{data}</div>}</div>;
};
