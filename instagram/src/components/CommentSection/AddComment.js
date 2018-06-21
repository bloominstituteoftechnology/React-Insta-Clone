import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

function AddComment (props) {
    return (
        <div className="comment-text">
            <h3>{props.comment.username}</h3>
            <p>{props.comment.text}</p>
        </div>
    );
}

AddComment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
};

export default AddComment;