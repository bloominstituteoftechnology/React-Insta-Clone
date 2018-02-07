import React, { Component } from 'react';
import './comment.css';

class Comment extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>{this.props.comment.text}</p>
      </div>  
    );
  }
}

export default Comment;