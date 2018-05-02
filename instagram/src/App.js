import React, { Component } from 'react';
//import logo from './logo.svg';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer.js';
// import CommentSection from '.components/CommentSection.js';
// import SearchBar from './SearchBar';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={};
  }
  render() {
    return (
      <div>
        <PostContainer postList={dummyData} />
      </div>
    );
  }
}

export default App;
