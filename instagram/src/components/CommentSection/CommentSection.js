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
      <div className="comment-input">
        <input id="form-control comment-field" type="text" placeholder="Add a comment" />
      </div>
    </div>
  );
}

export default CommentSection;