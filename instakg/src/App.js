import React, { Component } from 'react';
import './App.css';
import CommentSection from "./CommentSection/CommentSection";
import SearchBar from './SearchBar/SearchBar';
import PostContainer from './PostContainer/PostContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <CommentSection />
        <PostContainer />
      </div>
    );
  }
}

export default App;
