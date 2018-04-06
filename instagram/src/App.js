import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import CommentSection from './components/CommentSection/CommentSection.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import dummyData from './dummy-data.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      search: '',
      posts: dummyData
    }
  }

  postElements() {
    return this.state.posts.map(post => {
      return <PostContainer {...post} />
    })
  }

  postComments() {
    return this.state.posts.map(el => {
      return <CommentSection {...el} />
    })
  }



  render() {
    return (
      <div className="fullContainer">
        <div className="centeredContainer">
          <SearchBar />
          {this.postElements()}
          {/* {this.postComments()} */}
          {/* <CommentSection comments={this.state.posts}/> */}
        </div>
      </div >
    );
  }
}

export default App;