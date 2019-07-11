import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <div className="comment-wrapper">
        <p key={props.comment.username + props.comment.text}>
            <span className="comment-user">{props.comment.username}:</span>
            <span className="comment-text">{props.comment.text}</span>
            </p>        
            </div>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
};

export default Comment;