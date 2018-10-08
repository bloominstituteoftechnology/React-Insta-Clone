import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../components/SearchBar/SearchBar';
import PostContainer from '../components/PostContainer/PostContainer';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      search: ''
    };
  }

  render() {
    return (
      <div className="App">
        <div className="search-bar">
          <SearchBar />
        </div>
        <PostContainer />
      </div>
    );
  }
}

export default App;
