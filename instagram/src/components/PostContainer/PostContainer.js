import React, { Component } from 'react';
import dataFile from '../../dummy-data.js';
import Post from '../PostContainer/Post';
import './PostContainer.css';



class PostContainer extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.setState({ posts: dataFile });
  }

  render() {
    console.log(this.state.posts);
    return <div className="post-container">
      {this.state.posts.map(post => <Post key={post.username} post={post}/>)}
    </div>;
  }
}

export default PostContainer;