import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';
import CommentSection from '../CommentSection/CommentSection';

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
