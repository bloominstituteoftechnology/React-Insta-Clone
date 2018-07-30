import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/SearchBar/Search.js';
import PostList from './components/PostContainer/PostList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <PostList />
      </div>
    );
  }
}

export default App;
