import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostList from './components/PostList/PostList'

import dummyData from './dummy-data';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData,
      searchText: '',
    };
  }


  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
