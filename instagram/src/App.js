import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import CommentSection from './components/CommentSection/CommentSection.js';
//import dummyData from './dummy-data.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      post: [{}]
    }
  }
  render() {
    return (
      <div>
        <SearchBar data="hey"/>
        <PostContainer data="hey"/>
        <CommentSection data="hey"/>
      </div>
    );
  }
}

export default App;
