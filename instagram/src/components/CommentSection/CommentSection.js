import React from 'react';
import './CommentSection.css';

const CommentSection = props => {
  return (
    <div className="comment-section">
      <div className="d-flex my-1 social-icons">
        <i className="far fa-comment fa-lg mx-2"></i>
        <i className="far fa-heart fa-lg mx-1"></i>
      </div>
      <h6 className="m-2 font-weight-bold">{props.data.likes} likes</h6>
      {
        props.data.comments.map( comment => {
        return (
          <div className="mx-2 comment-text">
            <span className="font-weight-bold mr-2">
              {comment.username}
            </span>
            {comment.text}
          </div>
         );
        })
      }
      <p className="mx-2 time-stamp">{props.data.timestamp}</p>
      <div className="comment-input d-flex align-items-center">
        <input type="text" 
          className="mx-2 mt-3" 
          placeholder="Add a comment" 
        />
        <i className="mt-3 fas fa-ellipsis-h"></i>
      </div>
    </div>
  );
}

export default CommentSection;