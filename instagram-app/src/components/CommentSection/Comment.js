import React from 'react'; 
import PropTypes from 'prop-types'; 

import './CommentSection.css'; 


const Comment = props => {
    return (        
        <div className="comment">
            <p className="commentUserName">{props.comment.username} </p>
            <p className="commentText">{props.comment.text}</p>
        </div>

        
    );
};

Comment.propTypes = {
    comment: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    ).isRequired
  };
  
  // Just in case we haven't gotten data back, going to do a default prop array
  Comment.defaultProps = {
    comment: []
  };
  
export default Comment; 