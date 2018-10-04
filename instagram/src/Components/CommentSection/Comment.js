import React from 'react';
import './comment.css';
import PropTypes from 'prop-types';

/*
// Comments info
comments: [
    {
      username
      text
*/

const Comment = (props) => {
    return (
        <div className='comment-container'>
            <span className='comment-username'>{props.username}</span>
            <span className='comment-text'>{props.text}</span>
        </div>
    )
}

Comment.propTypes = {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};
export default Comment;