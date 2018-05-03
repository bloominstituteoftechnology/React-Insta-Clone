import React, { Component } from 'react';
//import logo from './logo.svg';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer.js';
// import CommentSection from './components/CommentSection/CommentSection.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostHeader from './components/PostHeader/postheader.js';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={};
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostHeader posterHead={dummyData} />
        <PostContainer instaPost={dummyData} />
      </div>
    );
  }
}

export default App;
