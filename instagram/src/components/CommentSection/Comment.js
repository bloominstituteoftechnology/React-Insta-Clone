import React from 'react';
import './Comment.css';
import PropTypes from 'prop-types';
import Username from './../Styles-Reusables/StyledComponent';

const Comment = props => {
    return (
        <div className="comment-container">
            <Username>{props.username}</Username>
            <div className="comment">{props.text}</div>
        </div>
    )
}

Comment.propTypes = {
    text: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
};
export default Comment;