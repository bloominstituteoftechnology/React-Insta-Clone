import React from 'react';
import './CommentSection.css';
import PropTypes from "prop-types";

const CommentSection = props => {
    return (
        <div className="comment-container">
            <div>{props.username}</div>
            <div>{props.text}</div>
        </div>
    );
};

CommentSection.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
};

export default CommentSection;