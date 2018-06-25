import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import Search from './components/SearchBar/Search';
import PostContainer from './components/PostContainer/PostContainer.js';
import Post from './components/PostContainer/Post';
import CommentSection from './components/CommentSection/CommentSection';
import Comment from './components/CommentSection/Comment';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    }
  }
  render() {
    return (
      <div className="App">
      <h1 className="App-title">Instantgram</h1>
      <Search />
      <Post />
      <CommentSection dummyData={this.state.dummyData}/>

      </div>
    );
  }
}

export default App;
