import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostList from './components/PostList/PostList'

import dummyData from './dummy-data';

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = dummyData;
    }
  render() {
    return (
      <div className="App">
            <SearchBar />
            <PostList />
      </div>
    );
  }
}

export default App;
