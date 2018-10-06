import React from 'react';
import PropTypes from "prop-types";




const CommentSection = (props) => {
 
    return (
      <div>{props.Comments.map(comment =>{
          return (
            <div>
                <strong><span>{comment.username}</span></strong> <span>{comment.text}</span>
            </div>
          )
      })}
      <div>{props.timestring}</div>
    
      <div>
          <input type = 'text' />
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