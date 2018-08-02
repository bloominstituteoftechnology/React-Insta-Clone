import React from "react";
import PropTypes from "prop-types";

//what is going on in the code
//I am creating a object called CommentSection.

const CommentSection = props => {
  return (
    <div className="comment-container">
      {props.comments.map((eachComment, index) => (
        <div key={index}>
          <div className="comment-section">
            <p className="comment user">{eachComment.username}</p>
            <p className="comment">{eachComment.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}; 

export default CommentSection;
