import React from 'react';
import PropTypes from 'prop-types';

function Comment (props) {
    return (
        <div className="comment">
            <h3>{props.comment.username}</h3>
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