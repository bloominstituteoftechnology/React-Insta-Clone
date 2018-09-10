import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <div>
            <p>{props.comment.text}</p>
            <p>-{props.comment.username}</p>
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