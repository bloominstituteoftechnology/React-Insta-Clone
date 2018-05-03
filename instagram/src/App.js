import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import CommentSection from './components/CommentSection/CommentSection.js';
import { dummyData } from './dummy-data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar/>
      </div>
    );
  }
}

export default App;
