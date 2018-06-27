import React, { Component } from 'react';
import dummyData from '../../../dummy-data';
import './Post.css';
import SearchContainer from '../SearchBar/SearchContainer';
import PostContainer from './PostContainer';



class PostPage extends Component {
  constructor() {
    super()

    this.state = {
      posts: dummyData
    }

    
  }

  render() {
    return (
      <div className="App">
      <SearchContainer />
      <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default PostPage;
