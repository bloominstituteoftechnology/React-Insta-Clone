import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBarContainer';
import PostsContainer from './components/PostContainer/PostsContainer';
// import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }
  render() {
    return (
      <div className="App">
       <SearchBar />
       <PostsContainer posts={this.state.posts} /> 
      </div>
    );
  }
}

export default App;
// <img src={logo} className="App-logo" alt="logo" />