import React from 'react';
import './Comments.css';
import PropTypes from 'prop-types';

const CommentSection = props => {
    return (
        <div className='comment-text'><strong> {props.comment.username} </strong> {props.comment.text}</div>
    );
}

CommentSection.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default CommentSection;