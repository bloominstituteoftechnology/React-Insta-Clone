import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.posts.map(item => <PostContainer post={item} comments={item.comments} key={item.timestamp} /> )}
      </div>
    );
  }
}

export default App;
