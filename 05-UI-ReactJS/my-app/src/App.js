import React from 'react';
import MovieCreator from './MovieCreator.js';
import MovieList from './MovieList.js';

import './App.css';

class App extends React.Component {
 
  render() {
    return (
      <div id="container">
          <MovieCreator />
          <hr />
          <MovieList />
          <hr />
          
      </div>
    )
  }
}

export default App;