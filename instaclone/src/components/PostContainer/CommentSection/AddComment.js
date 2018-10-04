import React, { Component } from 'react';
import './CommentSection.css';

class AddComment extends Component {
  render() {
    return (
      <div className='addCommentContainer'>
      <input className='addComment' value="Add Comment..."></input>
        <i class="fas fa-ellipsis-h"></i>

      </div>
    );
  }
}

export default AddComment;
