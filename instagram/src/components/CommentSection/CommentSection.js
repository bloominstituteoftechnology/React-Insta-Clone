import React from 'react';
import './comment.css';
import PropTypes from 'prop-types';

function CommentSection(props){
    return (
        <div className='each-comment-container'>
            <span className='username-comment'>{props.com.username} </span> 
            <span className='user-comment'>{props.com.text}</span> 
        </div>
    );
}

CommentSection.propTypes = {
    com: PropTypes.shape({
        comment: PropTypes.string,
        username: PropTypes.string,
    }),
}

export default CommentSection;