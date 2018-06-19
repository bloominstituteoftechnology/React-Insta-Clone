import React from 'react';
import PropTypes from 'prop-types';


const Comment = props => {
    return (
      <div className="comment-text">
        <span className="user"><b>{props.userIn}</b>: </span>
        <span className="comment">{props.comment}</span>{' '}
      </div>
    );
  };

Comment.propTypes = {
    comment: PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })
  };
  
  export default Comment;