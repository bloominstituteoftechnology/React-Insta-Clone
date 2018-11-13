import React, { Component } from 'react';
import './App.css';

// import data
import dummyData from './dummy-data'

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  render() {
    console.log(dummyData);
    return (
      <div className="App">
        <SearchBar />
        <div className="posts--container">
          <div className="posts">
            <PostContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
