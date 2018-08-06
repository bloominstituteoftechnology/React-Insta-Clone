import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import Searchbar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData,
    }
  }
  render() {
    return (
      <div>
        <Searchbar />
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
