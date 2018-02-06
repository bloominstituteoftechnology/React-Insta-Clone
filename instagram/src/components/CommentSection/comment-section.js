import React, { Component } from 'react';
import './comment-section.css';

class CommentSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Comments</h1>
        <p>{this.props.comments[0].text}</p>
      </div>
    );
  }
}

export default CommentSection;