import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import data from './dummy-data';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <SearchBar />
        { data.map((data, index) => <PostContainer key = { index } data = { data } />) }
      </div>
    );
  }
}

export default App;
