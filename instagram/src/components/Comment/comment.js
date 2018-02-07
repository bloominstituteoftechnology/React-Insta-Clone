import React, { Component } from 'react';
import './comment.css';

class Comment extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p className='comment__text'><span className = 'comment--bold'>{this.props.comment.username}: </span>{this.props.comment.text}</p>
      </div>  
    );
  }
}

export default Comment;