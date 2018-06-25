import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import SearchContainer from './instagram/components/SearchBar/SearchContainer';
import PostContainer from './instagram/components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super()

    this.state = {
      posts: dummyData
    }
  }

  render() {
    return (
      <div className="App">
      <SearchContainer />
      <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
