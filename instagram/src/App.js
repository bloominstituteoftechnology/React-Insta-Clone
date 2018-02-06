import React, { Component } from 'react';
import './App.css';
import './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar';
import CommentSection from './components/CommentSection/CommentSection';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Instagram</h1>
        </header>
        <SearchBar />
        <PostContainer />
        <CommentSection />
      </div>
    );
  }
}

export default App;
