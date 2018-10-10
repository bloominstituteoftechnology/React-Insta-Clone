import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainter';
import CommentSection from './components/CommentSection/CommentSection';
import dummyData from './components/dummy-data.js';

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div>
        <SearchBar />
        <PostContainer />
        <CommentSection />
      </div>
    );
  }
}

export default App;
