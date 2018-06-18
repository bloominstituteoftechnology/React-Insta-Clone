import React from 'react';
import PropTypes from 'prop-types';

function Comment (props) {
    return (
        <div className="comment">
            <h2>{props.comment.username}</h2>
            <p>{props.comment.text}</p>
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