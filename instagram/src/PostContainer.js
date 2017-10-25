import React, { Component } from 'react';
import postData from './application-data';
import { CommentSection } from './CommentSection';
import './PostContainer.css';
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
      <div className = "post">
        <div className = "post_Header">
        <div className = "post_Header_Thumb"><img className = "img-circle" src = {this.state.currentPost.thumbnailUrl}></img></div>
        <div className = "post_Header_User">{this.state.currentPost.username}</div>
        </div>
        <div>{this.state.currentPost.imageUrl}</div>
        <div>{this.state.currentPost.likes}</div>
        <div>{this.state.currentPost.timestamp}</div>
        <div />
        {/* {<CommentSection foo="this.state.bar" />} */}
      </div>
    );
  }
}
