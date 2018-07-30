import React from "react";
import './CommentSection.css';

const CommentSection = props => {
    return (
        <div>
          {props.comments.map(newComment => {
            return (
                <div key={newComment.text}>
                <p><b>{newComment.username}</b> {newComment.text}</p>
              </div>
            )
          })}
        <p>{props.timestamp}</p>
          <input
            type="text"
            name="comment"
            placeholder="Add a comment..."
            /> 
        </div>
      );
}

export default CommentSection;