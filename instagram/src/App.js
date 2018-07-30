import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar.js';
import CommentSection from './components/CommentSection/CommentSection.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: dummyData
    };
  }
  render() {
    return (
      <div className="App">
      <SearchBar />
      {/* <PostContainer posts={this.state.posts} /> */}
      <CommentSection/>
        
      </div>
    );
  }
}

export default App;
