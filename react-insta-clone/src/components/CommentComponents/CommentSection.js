import React from "react";

const CommentSection = props => {
    return (
        <div>
          {props.comments.map(newComment => {
            return (
              <div>
                <p><b>{newComment.username}</b> {newComment.text}</p>
              </div>
            )
          })}
          <input
            type="text"
            name="comment"
            placeholder="Add a comment..."
            /> 
        </div>
      );
}

export default CommentSection;