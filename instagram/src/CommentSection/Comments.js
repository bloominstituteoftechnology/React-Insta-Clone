import React from 'react';
import CommentSection from 'CommentSection';

const Comments = props => {
    return (
        <div className="each-comment">
          <div>{props.comment.username}</div>
          <p>{props.comment.text}</p>
        </div>
      );
    };
    
    Comments.propTypes = {
      comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
      })
    };

export default Comments;