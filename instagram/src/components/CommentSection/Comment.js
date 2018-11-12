import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {


    return (
    <div className="comment-wrapper">
        <p className="comment-text"><span className="comment-text__bold">{props.commentData.username}</span>{props.commentData.text}</p>
    </div>
    );
  };

  Comment.propTypes = {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };
  
  export default Comment;