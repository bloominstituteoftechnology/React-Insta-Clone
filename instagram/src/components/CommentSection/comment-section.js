import React, { Component } from 'react';
import Comment from '../Comment/comment.js';
import './comment-section.css';

class CommentSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Comments</h3>
          {this.props.comments.map((val, i) => <Comment key={i} comment={val} />)}
      </div>
    );
  }
}

export default CommentSection;