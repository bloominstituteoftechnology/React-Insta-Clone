import React, { Component } from 'react';
import postData from './application-data';
import { CommentSection } from './CommentSection';
export default class PostContainer extends Component {
  constructor() {
    super();
    this.state = {
      currentPost: postData
    };
  }

  render() {
    // console.log(this.state.currentPost);
    return this.state.currentPost.map(post => {
      return (
        <div>
          <div>{post.username}</div>
          <div>{post.thumbnailUrl}</div>
          <div>{post.imageUrl}</div>
          <div>{post.likes}</div>
          <div>{post.timestamp}</div>
          <div />
          <CommentSection comments={post.comments} />
        </div>
      );
    });
  }
}
