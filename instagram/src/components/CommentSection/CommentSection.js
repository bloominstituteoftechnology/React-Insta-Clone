import React from 'react';
import PropTypes from "prop-types";
import './commentsection.css';




const CommentSection = (props) => {
 
    return (
      <div>{props.Comments.map(comment =>{
          return (
            <div className = "commentBody">
                <strong>{comment.username}</strong><span className = "commentText">{comment.text}</span>
            </div>
          )
      })}
      <div className = "timeStamp">{props.timestring}</div>
    
      <div>
          <input className = "commentInput" type = 'text' />
      </div>
      </div>
    );
  
}

CommentSection.PropTypes = {
    Comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        })
    ).isRequired    
};

export default CommentSection ;