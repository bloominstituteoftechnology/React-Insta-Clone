import React, { Component } from 'react';
import postData from './application-data';
import { CommentSection } from './CommentSection';
import './PostContainer.css';
export default class PostContainer extends Component {
  constructor() {
    super();
    this.state = {
      currentPost: postData
    };
  }

  render() {
    return this.state.currentPost.map(post => {
      return (
        <div className="post">
          <div className="post_Header">
            <div className="post_Header_Thumb">
              <img className="img-circle" src={post.thumbnailUrl} alt="alt" />
            </div>
            <div className="post_Header_User">{post.username}</div>
          </div>
          <img src={post.imageUrl} alt="alt" />
          <div>{post.likes}</div>
          <div>{post.timestamp}</div>
          <div />
          <CommentSection comments={post.comments} />
        </div>
      );
    });
  }
}
