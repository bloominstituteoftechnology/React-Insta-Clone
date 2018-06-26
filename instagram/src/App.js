import React, { Component } from 'react';
import './App.css';
import CommentSection from './components/CommentSection/CommentSection';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar'
class App extends Component {
  render() {
    return (
      <div className="App">
        <PostContainer />
        <CommentSection />
        <SearchBar />
      </div>
    );
  }
}

export default App;
