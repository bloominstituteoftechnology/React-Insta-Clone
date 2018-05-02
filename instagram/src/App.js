import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './PostContainer';
// import CommentSection from './CommentSection';
// import SearchBar from './SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <PostContainer postList={dummyData} />
      </div>
    );
  }
}

export default App;
