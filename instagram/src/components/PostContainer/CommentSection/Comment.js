import React from 'react';
import PropTypes from 'prop-types';

function Comment (props) {
    const handleCommentDelete = function(event) {
        props.handleCommentDelete(event, props.id);
    }

    return (
        <div className="comment">
            <h3>{props.comment.username}</h3>
            <p>{props.comment.text}</p>
            <i className="far fa-trash-alt" onClick={handleCommentDelete}></i>
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