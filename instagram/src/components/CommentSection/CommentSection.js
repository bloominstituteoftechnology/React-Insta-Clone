import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Comments.css';

const CommentSection = props => {
    return (
        <div className='comment'>
            <p><span className='heavy-font'>{props.comment.username}</span> {props.comment.text}</p>
        </div>
    )
}

CommentSection.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string,  
}

export default CommentSection;