import React, { Component } from 'react';

import './App.css';
import dummyData from './dummy-data';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import PostHeader from './components/PostContainer/PostHeader';
import PostsContainer from './components/PostContainer/PostsContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBarContainer />
        <PostsContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
