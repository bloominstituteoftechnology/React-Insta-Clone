import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar.js';
import CommentSection from './Components/CommentSection/CommentSection.js';
import PostContainer from './Components/PostContainer/PostContainer.js';
import dummyData from './dummy-data.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      search: '',
      posts: dummyData
    }
  }

  postElements = () => {
    return this.state.posts.map(post => {
      return <PostContainer {...post} />
    })
  }

  render() {
    return (
      <div className="fullContainer">
        <div className="centeredContainer">
          <SearchBar />
          {this.postElements()}
        </div>
      </div >
    );
  }
}

export default App;