import React from "react";
import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <div className="comment">
            <p><b>{props.commentData.username}:</b> {props.commentData.text}</p>
        </div>
    );
}

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
  };

export default Comment;
