import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import PostContainer from './components/PostContainer/PostContainer';
import CommentContainer from './components/CommentSection/CommentContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBarContainer />
        <PostContainer />
        <CommentContainer />
      </div>
    );
  }
}

export default App;
