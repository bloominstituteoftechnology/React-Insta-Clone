import React, { Component } from 'react';
import dataFile from '../../dummy-data.js';
import Post from '../PostContainer/Post';

class PostContainer extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.setState({ posts: dataFile });
  }

  render() {
    console.log(this.state.posts);
    return <div>
      {this.state.posts.map(post => <Post post={post} />)}
    </div>;
  }
}

export default PostContainer;