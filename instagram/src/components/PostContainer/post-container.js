import React, { Component } from 'react';
import CommentSection from '../CommentSection/comment-section.js';
import './post-container.css';

class PostContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Post</h1>
        <div>
          <img src={this.props.user.thumbnailUrl} />
          <p>{this.props.user.username}</p>
        </div>
        <div>
          <img src={this.props.user.imageUrl} />
        </div>
        <p>{this.props.user.likes} likes</p>
        <CommentSection comments={this.props.user.comments} />
      </div>
    );
  }
}

export default PostContainer;