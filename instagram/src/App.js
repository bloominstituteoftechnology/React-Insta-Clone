import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './Components/SearchBar/SearchBar.js';
import PostContainer from './Components/PostContainer/PostContainer.js';
import CommentSection from './Components/CommentSection/CommentSection.js';


class App extends Component {
  render() {
    return (
      <div className="App"> 
        <SearchBar />
        <PostContainer />
        <CommentSection />
        <PostContainer />
        <CommentSection />
        <PostContainer />
        <CommentSection />

      </div>
    );
  }
}

export default App;
