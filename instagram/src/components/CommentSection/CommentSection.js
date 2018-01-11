import React, { Component } from 'react';
import './CommentSection.css';

class CommentSection extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div key={this.props.key}>
        {this.props.comment.username} 
        {this.props.comment.text}
      </div>
    )
  }
}

export default CommentSection;
