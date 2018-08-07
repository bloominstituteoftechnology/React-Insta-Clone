import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data.js'
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';

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
        <SearchBar />
        <PostContainer posts = {this.state.posts} />
      </div>
    );
  }
}

export default App;
