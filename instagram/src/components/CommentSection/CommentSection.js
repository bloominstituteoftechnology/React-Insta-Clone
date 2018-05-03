import React from 'react';
import './CommentSection.css';

const CommentSection = props => {
  // console.log("props.update",props.update);
  return (
    <div className="comment-section">
      <div className="d-flex my-1 social-icons">
        <i className="far fa-comment fa-lg mx-2"></i>
        <i className="far fa-heart fa-lg mx-1"></i>
      </div>
      <h6 className="m-2 font-weight-bold">{props.data.likes} likes</h6>
      {
        props.data.comments.map( (comment, i) => {
        return (
          <div key={i} className="mx-2 comment-text">
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
        <form onSubmit={(e) => {
          e.preventDefault();
          // console.log(props.state.comment);
          props.addCom(e);
        }}>
          <input 
            id="comment"
            name="comment"
            type="text" 
            className="mx-2 mt-3" 
            placeholder="Add a comment"
            value={props.state.comment} 
            onChange={props.update}
          />
        </form>
        <i className="mt-3 fas fa-ellipsis-h"></i>
      </div>
    </div>
  );
}

export default CommentSection;