import React, { Component } from 'react';
import postData from './application-data';
import { CommentSection } from './CommentSection';
export default class PostContainer extends Component {
  constructor() {
    super();
    this.state = {
      currentPost: postData[0]
    };
  }

  render() {
    // console.log(this.state.currentPost);
    return (
      <div>
        <div>{this.state.currentPost.username}</div>
        <div>{this.state.currentPost.thumbnailUrl}</div>
        <div>{this.state.currentPost.imageUrl}</div>
        <div>{this.state.currentPost.likes}</div>
        <div>{this.state.currentPost.timestamp}</div>
        <div />
        {/* {<CommentSection foo="this.state.bar" />} */}
      </div>
    );
  }
}
