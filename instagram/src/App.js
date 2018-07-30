import React, { Component } from 'react';
import './App.css';
import Search from './components/SearchBar/Search.js';
import PostList from './components/PostContainer/PostList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search className="search-bar"/>
        <PostList className="post-list-container"/>
      </div>
    );
  }
}

export default App;
