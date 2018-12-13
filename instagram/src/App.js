import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import PostContainer from './PostContainer';
import CommentSection from './CommentSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer />
        <CommentSection />
      </div>
    );
  }
}

export default App;
