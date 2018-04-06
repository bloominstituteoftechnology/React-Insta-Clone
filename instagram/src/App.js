import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import './components/SearchBar/SearchBar.css'
import CommentSection from './components/CommentSection/CommentSection';
import './components/CommentSection/CommentSection.css';
import PostContainer from './components/PostContainer/PostContainer';
import './components/PostContainer/PostContainer.css';

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
