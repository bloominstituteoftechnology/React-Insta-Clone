import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import Search from './components/SearchBar/Search';
import PostContainer from './components/PostContainer/PostContainer.js';

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
      <h1 className="App-title">Instantgram</h1>
      <Search />
      <PostContainer posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
