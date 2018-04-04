import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import CommentSection from './components/CommentSection/CommentSection.js';
import PostContainer from './components/PostContainer/PostContainer.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  render() {
    return (
      <div>
        <SearchBar />
        <PostContainer />
        <CommentSection />
      </div>
    );
  }
}

export default App;
