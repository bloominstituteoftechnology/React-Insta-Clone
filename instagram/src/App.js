import React, { Component } from 'react';
import logo from './logo.svg';
import dummyData from './dummy-data.js';

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
console.log(dummyData)
class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts={dummyData} />
      </div>
    );
  }
}

export default App;
