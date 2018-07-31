import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

const CommentSection = props => {
    return (
        <div className="comments-section">
            <span>{props.comment.username}</span>
            {props.comment.text}
        </div>
    );
}

CommentSection.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}


export default CommentSection;