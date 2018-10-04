import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';

class App extends Component {
  render() {
    return (
      <>
      <SearchBar />
      <PostContainer />
      <CommentSection />
      </>
    );
  }
}

export default App;
