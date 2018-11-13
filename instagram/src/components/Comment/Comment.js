import React from 'react';

import PropTypes from 'prop-types';

import './Comment.css';

const Comment = props => {
    return (
        <div className="comment">
            <span className="comment__name">{props.comment.username}</span> <span className="comment__content">{props.comment.text}</span>
        </div>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
};

export default Comment;