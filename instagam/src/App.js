import React, { Component } from 'react';
import CommentSection from './components/CommentSection';
import PostContainer from './components/PostContainer';
import SearchBar from './components/SearchBar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <PostContainer />
      </div>
    );
  }
}

export default App;
