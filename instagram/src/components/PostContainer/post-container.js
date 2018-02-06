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
        <h1>PostContainer</h1>
        <CommentSection comments={this.props.user.comments} />
      </div>
    );
  }
}

export default PostContainer;