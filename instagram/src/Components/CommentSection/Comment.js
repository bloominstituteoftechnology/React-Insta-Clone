import React from 'react';
import './Comment.css';
import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <div className="comment-wrapper">
          <span className="comment-comment">{props.comment.text}</span>{''}
          <span className="comment-user">{props.comment.username}</span>
        </div>
    );
};

Comment.PropTypes = {
    comment: PropTypes.shape({
        text:PropTypes.string,
        username: PropTypes.string
    })
};


export default Comment;

