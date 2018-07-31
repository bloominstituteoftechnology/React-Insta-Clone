import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
    return(
    <div>
        <span>{props.comment.username} </span>
        {props.comment.text}
    </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })
  };

export default Comment;